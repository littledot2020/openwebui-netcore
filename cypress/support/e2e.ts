/// <reference types="cypress" />

export const adminUser = {
	name: 'Admin User',
	email: 'admin@example.com',
	password: 'password'
};


const login = (email: string, password: string) => {
    return cy.session(
        email,
        () => {
            // 访问认证页面
            cy.visit('/authnow');
            // 填写表单
            cy.get('input[autocomplete="email"]').type(email);
            cy.get('input[type="password"]').type(password);
            // 提交表单
            cy.get('button[type="submit"]').click();
            // 等待用户重定向到主页
            cy.get('#chat-search').should('exist');
            // 获取当前版本以跳过更新日志对话框
            if (localStorage.getItem('version') === null) {
                cy.get('button').contains("Okay, Let's Go!").click();
            }
        },
        {
            validate: () => {
                // 发送验证请求以检查用户身份
                cy.request({
                    method: 'GET',
                    url: '/api/v1/auths/',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
            }
        }
    );
};

// const login = (email: string, password: string) => {
// 	return cy.session(
// 		email,
// 		() => {
// 			// Visit auth page
// 			cy.visit('/authnow');
// 			// Fill out the form
// 			cy.get('input[autocomplete="email"]').type(email);
// 			cy.get('input[type="password"]').type(password);
// 			// Submit the form
// 			cy.get('button[type="submit"]').click();
// 			// Wait until the user is redirected to the home page
// 			cy.get('#chat-search').should('exist');
// 			// Get the current version to skip the changelog dialog
// 			if (localStorage.getItem('version') === null) {
// 				cy.get('button').contains("Okay, Let's Go!").click();
// 			}
// 		},
// 		{
// 			validate: () => {
// 				cy.request({
// 					method: 'GET',
// 					url: '/api/v1/auths/',
// 					headers: {
// 						Authorization: 'Bearer ' + localStorage.getItem('token')
// 					}
// 				});
// 			}
// 		}
// 	);
// };

const register = (name: string, email: string, password: string) => {
	return cy
		.request({
			method: 'POST',
			url: '/api/v1/auths/signup',
			body: {
				name: name,
				email: email,
				password: password
			},
			failOnStatusCode: false
		})
		.then((response) => {
			expect(response.status).to.be.oneOf([200, 400]);
		});
};

const registerAdmin = () => {
	return register(adminUser.name, adminUser.email, adminUser.password);
};

const loginAdmin = () => {
	return login(adminUser.email, adminUser.password);
};

Cypress.Commands.add('login', (email, password) => login(email, password));
Cypress.Commands.add('register', (name, email, password) => register(name, email, password));
Cypress.Commands.add('registerAdmin', () => registerAdmin());
Cypress.Commands.add('loginAdmin', () => loginAdmin());

before(() => {
	cy.registerAdmin();
});
