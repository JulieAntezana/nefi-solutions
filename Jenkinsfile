pipeline {
    agent any

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
                echo 'Building the application...'
                sh 'npm run build && node server.js'
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
