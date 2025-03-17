
const appwriteConfig = {
	project_id: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	db_id: import.meta.env.VITE_APPWRITE_DB_ID,
	users_collection_id: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
	projects_collection_id: import.meta.env
		.VITE_APPWRITE_PROJECTS_COLLECTION_ID,
	applications_collection_id: import.meta.env
		.VITE_APPWRITE_APPLICATIONS_COLLECTION_ID,
	jobs_collection_id: import.meta.env.VITE_APPWRITE_JOBS_COLLECTION_ID,
	bucket_id: import.meta.env.VITE_APPWRITE_BUCKET_ID,
	endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
};

export default appwriteConfig;