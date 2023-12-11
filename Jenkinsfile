pipeline {
    agent any

    environment {
        MONGODB_CREDENTIALS = credentials('mongodb-atlas-credentials')
    }

    tools {
        // Define the NodeJS tool with the same name as configured in Jenkins
        nodejs 'NodeJS'
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repository...'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/JulieAntezana/nefi-solutions.git']]])
            }
        }

        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'mongodb-atlas-credentials', variable: 'URI')]) {
                        echo 'Building and testing the application...'
                        sh 'npm run build && node server.js'
                    }
                }
            }
        }

        // Uncomment the stages below once the previous stages are working correctly
        // stage('Test') {
        //     steps {
        //         echo 'Running tests...'
        //         sh 'npm run test'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying the application...'
        //         // Add your deployment commands here
        //     }
        // }
    }
}
