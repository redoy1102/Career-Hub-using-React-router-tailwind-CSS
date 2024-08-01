export const getJobApplication = () => {
    const storedJobApplication = localStorage.getItem("job-application");
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else{
        return [];
    }
}

const saveJobApplication = (key, saveItem) =>{
    localStorage.setItem(key, JSON.stringify(saveItem));
}

export const searchJobId = (searchJobId) => {
    const storedJobApplication = getJobApplication();
    const isExist = storedJobApplication.find(jobId => searchJobId === jobId);
    console.log(isExist);
    return isExist;
}

export const addJobApplication = (id) => {
    const storedJobApplication = getJobApplication();
    const existingJobApplication = storedJobApplication.find((jobId) => jobId === id);

    if(!existingJobApplication){
        storedJobApplication.push(id);
        saveJobApplication("job-application", storedJobApplication);
    }
}

export default {getJobApplication, addJobApplication};