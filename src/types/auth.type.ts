type TEmail = { email: string }
type TPassword = { password: string }
type TName = { name: string }
type TDescription = { description: string }
type TAvatarPath = { avatarPath: string }

export type TRegistrationBody = TEmail & TName & TDescription & TAvatarPath
export type TLoginBody = TEmail & TPassword
export type TEditBody = TName & TDescription & TAvatarPath