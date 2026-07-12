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
                dir('Apps/web') {
                    archiveArtifacts artifacts: '**/dist/**', fingerprint: true
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