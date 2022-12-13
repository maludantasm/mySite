# O projeto
Descricao

# Elementos presentes no site
- componentes react
- styled-components
- CRUD
- autenticação de usuário
- temas

# Icons para o componete WhatIDo
https://icons.getbootstrap.com/

# Problema com o file-saver
https://www.npmjs.com/package/file-saver

"FileSaver.js is the solution to saving files on the client-side, and is perfect for web apps that generates files on the client, However if the file is coming from the server we recommend you to first try to use Content-Disposition attachment response header as it has more cross-browser compatiblity."

Possível solução:
https://www.geeksforgeeks.org/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript/

# Problema para rodar o site
Os arquivos estavam no .gitignore -> Resolvido com npm install
Arquivos faltantes: node_modules

"Of course it does require. If you open your package.json, you will find minimal dependencies that are required to run simple react.js app if you are using CRA. Regarding you problem, if you deleted node_modules folder (delete package-lock.json as well), you will have to rerun npm install command to install all dependencies."

Solução:
https://stackoverflow.com/questions/57685935/does-react-js-require-to-have-a-node-modules-folder-to-run

# Instalando o nvm (node version manager)
"NVM is a Node Version Manager tool. Using the NVM utility, you can install multiple node.js versions on a single system. You can also choose a specific Node version for applications. It also provides an option to auto-select the node version using the .nvmrc configuration file."

```sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash ```

https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu
https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/

# Versions
nvm =< 0.39.2
npm =< 6.14.4 -> 8.19.2
node (latest lts(long term support)) =< 10.19.0 -> 18.12.1

# Imports da web
Para fazer importações com styled-components é só importar com a tag ```<link/>``` no /public/index.html 


https://thewebdev.info/2021/05/24/how-to-download-file-in-react-js/
https://stackoverflow.com/questions/31883601/passings-array-as-props-in-reactjs
https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js










        <HeaderStyle>
            <HeaderMenuStart>
                <HeaderLetter><b>{letter}</b></HeaderLetter>
                <HeaderName><b>{firstName}</b> {lastName}</HeaderName>
            </HeaderMenuStart>   
            <HeaderMenuEnd> 
                <HeaderUl>
                    <HeaderElements elements={[
                                                ['#', 'Página Inicial', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'], 
                                                ['#', 'Sobre', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'], 
                                                ['#', 'Contatos','M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z']
                                    ]}
                    />
                </HeaderUl>    
            </HeaderMenuEnd>
        </HeaderStyle>


        <HeaderElementLi>
                    <HeaderMenuEndA href={href}>{title}
                        <HeaderSvg xmlns='http://www.w3.org/2000/svg' width='1.7vh' height='1.7vh' fill='currentColor' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d={icon}/>
                        </HeaderSvg>
                    </HeaderMenuEndA>
                </HeaderElementLi>










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)