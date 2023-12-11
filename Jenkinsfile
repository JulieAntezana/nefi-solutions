pipeline {
    agent any

    environment {
        MONGODB_CREDENTIALS = credentials('your-mongodb-credentials-id')
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

        stage('Build') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'mongobd-atlas-credentials', variable: 'MONGODB_CREDENTIALS')]) {
                        // Use MONGODB_CREDENTIALS in your MongoDB connection configuration
                        // Example: sh "mongo --uri=${MONGODB_CREDENTIALS}"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build && node server.js'
                script {
                    withCredentials([string(credentialsId: 'mongodb-atlas-credentials', variable: 'MONGODB_CREDENTIALS')]) {
                        // Use MONGODB_CREDENTIALS in your MongoDB connection configuration
                        sh "mongo --uri=${MONGODB_CREDENTIALS}"
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