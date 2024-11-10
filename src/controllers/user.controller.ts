import createUserAction from '../actions/user/create.user.action';
import { CreateUserType, UpdateUserType, UserType } from '../types/user.types';
import findUserAction from '../actions/user/find.user.action';
import modifyUserAction from '../actions/user/modify.user.action';

async function createUser(userData: CreateUserType): Promise<UserType> {
	const user = await createUserAction(userData);

	return user;
}

async function loginUser(username: string, password: string): Promise<UserType | null> {
	const user = await findUserAction({username, password});

	return user ? user[0] : null;
}

async function modifyUser(id: string, dataUser: UpdateUserType): Promise<UserType | null> {
	const user = await modifyUserAction(id, dataUser);
	
	return user;
}

export { createUser, loginUser, modifyUser };
