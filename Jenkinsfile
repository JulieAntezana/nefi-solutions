pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repository...'
                git 'https://github.com/Nefi-Solutions/Floral.git' // Replace with your GitHub repo URL
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
                sh 'npm run build'
            }
        }

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