pipeline {
    agent any
    // tools {
    //     nodejs 'Node21'
    // }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/meas01/web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
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