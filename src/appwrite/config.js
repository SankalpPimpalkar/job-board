import { Client, Account, Databases, Storage } from "appwrite";

const appwriteConfig = {
	project_id: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	db_id: import.meta.env.VITE_APPWRITE_DB_ID,
	projects_collection_id: import.meta.env
		.VITE_APPWRITE_PROJECTS_COLLECTION_ID,
	applicants_collection_id: import.meta.env
		.VITE_APPWRITE_APPLICANTS_COLLECTION_ID,
	applicaions_collection_id: import.meta.env
		.VITE_APPWRITE_APPLICATIONS_COLLECTION_ID,
	jobs_collection_id: import.meta.env.VITE_APPWRITE_JOBS_COLLECTION_ID,
	companies_collection_id: import.meta.env
		.VITE_APPWRITE_COMPANIES_COLLECTION_ID,
	bucket_id: import.meta.env.VITE_APPWRITE_BUCKET_ID,
	project_url: import.meta.env.VITE_APPWRITE_ENDPOINT,
};

const client = new Client();

client
	.setProject(appwriteConfig.project_id)
	.setEndpoint(appwriteConfig.project_url);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { account, database, storage, appwriteConfig };
