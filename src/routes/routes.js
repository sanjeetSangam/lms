const host = process.env.REACT_APP_API;

export const getLectures = `${host}/api/lectures`;
export const getAssignments = `${host}/api/assignments`;
export const getOneAssignment = `${host}/api/assignments`;

export const postLecture = `${host}/api/lectures/postlectures`;
export const postAssignment = `${host}/api/lectures/postAssignment`;
