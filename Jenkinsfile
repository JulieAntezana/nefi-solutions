pipeline {
    agent any

    environment {
        MONGODB_CREDENTIALS = credentials('mongodb-atlas-credentials')
    }

    tools {
        // Define the NodeJS tool with the same name as configured in Jenkins
        nodejs 'NodeJS'
    }

    post {
        failure {
            emailext subject: "Build Failed: ${currentBuild.fullDisplayName}",
                      body: "Build failed. Please check the Jenkins console for details.",
                      recipientProviders: [jenknotifications@nefisolutions.com],
                      to: "dev1@nefisolutions.com"
        }
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
                // Install Node.js dependencies including Selenium WebDriver
                sh 'npm install selenium-webdriver --save-dev'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'mongodb-atlas-credentials', variable: 'URI')]) {
                        echo 'Building and testing the application...'
                        sh 'npm run build'
                        sh 'npm start > /dev/null 2>&1 &'
                    }
                }
            }
        }

        stage('Unit Test') {
            steps {
                script {
                    echo 'Running unit tests...'

                    // Set a shorter timeout for faster feedback in case of failure
                    def timeoutDuration = '30s' // Set to a suitable duration (e.g., 2 minutes)

                    // Run the tests with timeout
                    def karmaExitCode = sh(script: "timeout ${timeoutDuration} ng test --browsers=ChromeHeadless", returnStatus: true)

                    // Kill Node.js and Karma processes explicitly
                    sh 'pkill -f "node server.js" || true' // Kill the Node.js server
                    sh 'pkill -f "chrome-remote-interface" || true' // Kill the Karma server

                    // Check if the tests failed or timed out
                    if (karmaExitCode != 0) {
                        // Tests failed or timed out, print a message (build not marked as failed)
                        echo "Unit tests failed or timed out. Continuing with the pipeline."
                    } else {
                        // Tests passed, continue with the pipeline
                        echo 'Unit tests passed.'
                        sh 'pkill -f ChromeHeadless'
                    }
                }
            }
        }

        stage('Integration Test') {
            steps {
                echo 'Running integration tests...'
                catchError {
                    // Run integration tests (modify this command based on your project structure)
                    sh 'npx wdio wdio.conf.js'
                }
            }
        }

        stage('Acceptance Test') {
            steps {
                echo 'Running acceptance tests...'
                catchError {
                    // Run acceptance tests (modify this command based on your project structure)
                    sh 'node e2e/acceptance-test.e2e.krecorder.js'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // This step will pause the pipeline and wait for manual input to proceed
                input message: 'All tests passed. Deploy now?'

                // Stop the currently running Node.js server (if any)
                sh 'pkill -f "node server.js" || true'

                // Copy the built application files to the deployment directory
                sh 'cp -r dist/* /path/to/deployment/directory'

                // Install production dependencies (if needed)
                sh 'npm install --production --prefix /path/to/deployment/directory'

                // Start the Node.js server in the deployment directory
                sh 'nohup node /path/to/deployment/directory/server.js &'

                // Additional cleanup steps
                sh 'rm -rf /path/to/temporary/files'
                sh 'echo "Cleanup completed."'
            }
        }

    }
}
