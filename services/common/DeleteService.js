

const DeleteService = async (Request, DataModel) => {
    try {
        const DeleteID = Request.params.id
        const UserEmail=Request.headers['email'];

        let QueryObject={};

        QueryObject['_id']=DeleteID;
        QueryObject[UserEmail]=UserEmail;

        const Delete = await DataModel.deleteMany(QueryObject)
        return {status: "success",Delete:Delete}

        
    } catch (error) {
        return {status: "fail", data: error}
    }
}

module.exports=DeleteService