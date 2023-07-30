export const rules = {
    required: (message: string = "Required field") => ({
        required: true,
        message
    }),
    isEmptySpaces: (message: string = 'Input cannot be empty spaces!') => () => ({
        // Todo fix type
        validator(_: any, value: string) {
            if (value && value.trim() === '') {
                return Promise.reject(new Error(message));
            }
            return Promise.resolve();
        }
    })
}
