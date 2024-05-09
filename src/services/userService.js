import ourhttp from "../http-common"
class UserDataService
{     
    getAllUsers()
    {
        return ourhttp.get("user/");
    }
    getSingleUser()
    {
        return ourhttp.get("user/showuser/");
    }
    insertUser(data)
    {
        return ourhttp.post("user/",data)
    }
    updateUser(data)
    {
        return ourhttp.put("user/",data);
     }
     deleteUser(data1)
     {
        return ourhttp.delete("user/",{ data: data1 })
     }    
}
export default new UserDataService();