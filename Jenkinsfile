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
        stage('Print Environment') {
            steps {
                script {
                    echo 'Printing environment information...'
                    sh 'echo $USER'  // Print the Jenkins user
                    sh 'echo $PATH'  // Print the PATH environment variable
                    sh 'chromium --version'
                    sh 'whoami'
                    sh 'id'
                }
            }
        }

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
                    withCredentials([string(credentialsId: 'mongodb-atlas-credentials', variable: 'URI')]) {
                        echo 'Building and testing the application...'
                        sh 'npm run build'
                        sh 'nohup node server.js &'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'ng test --include src/app/home/home.component.spec.ts --browsers=ChromeHeadless'
            }
        }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying the application...'
        //         // Add your deployment commands here
        //     }
        // }
    }
}
