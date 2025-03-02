import { account, storage, database, appwriteConfig } from "./config";
import { ID } from "appwrite";

// Authentication functions
export async function createAccountForCompany({
	name,
	email,
	description,
	number,
	address,
	password,
}) {
	try {
		const companyInAuth = await account.create(
			ID.unique(),
			email,
			password
		);

		if (!companyInAuth) {
			throw "Failed to create company in auth";
		}

		const companyInDB = await database.createDocument(
			appwriteConfig.db_id,
			appwriteConfig.companies_collection_id,
			companyInAuth.$id,
			{
				name,
				email,
				description,
				number,
				address,
			}
		);

		if (!companyInDB) {
			throw "Failed to create company in database";
		}

		return {
			success: true,
			data: companyInDB,
			message: "New company has been created",
		};
	} catch (error) {
		console.log("Failed to create new account for company", error);
		throw error;
	}
}

export async function createAccountForApplicant({
	email,
	password,
	number,
	name,
}) {
	try {
		const newApplicantInAuth = await account.create(
			ID.unique(),
			email,
			password
		);

		if (!newApplicantInAuth) {
			throw "Failed to create new applicant in auth";
		}

		const newApplicantInDB = await database.createDocument(
			appwriteConfig.db_id,
			appwriteConfig.applicants_collection_id,
			newApplicantInAuth.$id,
			{
				name,
				email,
				number,
			}
		);

		if (!newApplicantInDB) {
			company;
			throw "Failed to create new applicant in database";
		}

		return {
			success: true,
			data: newApplicantInDB,
			message: "New applicant has been created",
		};
	} catch (error) {
		console.log("Failed to create new account for applicant", error);
		throw error;
	}
}

export async function loginAccount({ email, password }) {
	try {
		const session = await account.createEmailPasswordSession(
			email,
			password
		);

		if (!session) {
			throw "Failed to create session";
		}

		return {
			success: true,
			data: session,
			message: "Successfully logged in",
		};
	} catch (error) {
		console.log("Failed to login account", error);
		throw error;
	}
}

export async function logoutAccount() {
	try {
		await account.deleteSession("current");

		return {
			success: true,
			message: "Successfully logged out",
		};
	} catch (error) {
		console.log("Failed to logout account", error);
		throw error;
	}
}

// Database functions
export async function getDetailsOfCompany(companyId) {
	try {
		const companyDetails = await database.getDocument(
			appwriteConfig.db_id,
			appwriteConfig.companies_collection_id,
			companyId
		);

        if (!companyDetails) {
            throw "Failed to fetch company details"
        }

		return {
			success: true,
			data: companyDetails,
			message: "Successfully fetched company details",
		};
	} catch (error) {
		console.log("Failed to get company details", error);
		throw error;
	}
}

export async function getDetailsOfApplicant(applicantId) {
	try {
		const applicantDetails = await database.getDocument(
			appwriteConfig.db_id,
			appwriteConfig.applicants_collection_id,
			applicantId
		);

        if (!applicantDetails) {
            throw "Failed to fetch applicant details"
        }

		return {
			success: true,
			data: applicantDetails,
			message: "Successfully fetched applicant details",
		};
	} catch (error) {
		console.log("Failed to get applicant details", error);
		throw error;
	}
}
