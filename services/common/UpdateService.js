const UpdateService = async (Request, DataModel) => {
    try {
        const id = Request.params.id
        const PostBody = Request.body
        const UserEmail = Request.headers["email"]

        const data = await DataModel.updateOne({_id: id, UserEmail: UserEmail}, PostBody)
        return {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error.message}
    }
}

module.exports = UpdateService