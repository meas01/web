pipeline {
    agent any

    stages {
        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/meas01/web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Apps/web') {
                    sh 'npm install --include=dev'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Apps/web') {
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Build') {
            steps {
                script {
                    def artifactDir = 'Apps/web/dist'
                    if (fileExists(artifactDir)) {
                        archiveArtifacts artifacts: 'Apps/web/dist/**', fingerprint: true
                        echo "Archived build artifacts from ${artifactDir}"
                    } else {
                        echo "No build artifacts found under ${artifactDir}; skipping archive."
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Vue 3 + Vite build completed successfully!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}