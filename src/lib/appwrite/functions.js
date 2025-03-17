import { Client, Account, ID, Databases, Storage } from "appwrite";
import appwriteConfig from "./config";

class AppwriteService {
	client = new Client();
	account;
	storage;
	database;

	constructor() {
		this.client
			.setEndpoint(appwriteConfig.endpoint)
			.setProject(appwriteConfig.project_id);

		this.account = new Account(this.client);
		this.database = new Databases(this.client);
		this.storage = new Storage(this.client);
	}

	async createAccount({ email, password, name, type = "applicant" }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);

			if (userAccount) {
				const userAccountDB = await this.database.createDocument(
					appwriteConfig.db_id,
					appwriteConfig.users_collection_id,
					userAccount.$id,
					{
						type,
						name,
						email,
					}
				);

				if (userAccountDB) {
					await this.login({ email, password });
					return userAccountDB;
				}
			}

			throw "Failed to create user account";
		} catch (error) {
			console.log("Create Account Error | ", error);
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			console.log("Login Account Error | ", error);
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			const userAccount = await this.account.get();

			if (userAccount) {
				const savedUser = await this.database.getDocument(
					appwriteConfig.db_id,
					appwriteConfig.users_collection_id,
					userAccount.$id
				);

				return savedUser;
			}

			throw "Failed to fetch user details";
		} catch (error) {
			console.log("Get Account Error | ", error);
			throw error;
		}
	}

	async logout() {
		try {
			await this.account.deleteSession('current');
		} catch (error) {
            console.log("Logout Account Error | ", error);
			throw error;
		}
	}
}

const appwriteService = new AppwriteService();

export default appwriteService;
