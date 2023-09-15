const { default: mongoose } = require("mongoose");

const DetailsByIDService = async (Request, DataModel) => {
    try {
        const DetailsID = Request.params.id
        const UserEmail = Request.headers['email']

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {}
        QueryObject['_id'] = new ObjectId(DetailsID)
        QueryObject['UserEmail']=UserEmail;

        let data = await DataModel.aggregate([
            {$match: QueryObject}
        ])

        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error.message}
    }
}

module.exports=DetailsByIDService