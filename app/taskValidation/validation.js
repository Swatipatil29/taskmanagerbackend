const taskValidationSchema = {
    title: {
        notEmpty: {
            errorMessage: 'title is required'
        }
    },
    description: {
        notEmpty: {
            errorMessage: 'description is required'
        }
    }
}

module.exports = taskValidationSchema