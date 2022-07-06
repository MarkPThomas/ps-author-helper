export function greet(name: string) {
    return `Hi, ${name}, welcome to my course on declaration files!`;
}

export function getAuthorContactInfo() {
    return new AuthorInfo('Matthew', 'Kruczek', 'MCKRUZ');
}

export function getModuleName(moduleNumber: number) {
    switch (moduleNumber) {
        case 1:
            return 'Introduction to My Course';
        case 2:
            return 'Declaration Files Fundamentals';
        case 3:
            return 'Building a Declaration File';
        case 4:
            return 'Publishing Your Own Library';
        default:
            return 'No such module exists';
    }
}

export class AuthorInfo {
    constructor(public firstName: string, public lastName: string, public twitterHandle: string) {}
}