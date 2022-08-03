
export const validators = {
    required(value: string) {
        return (value ? undefined : 'Required')
    },
    maxLength(max: number) {
        return (value: string) => value && value.length > max ? `Must be ${max} characters or less` : undefined
    },
    minLength(min: number) {
        return (value: string) => value && value.length < min ? `Must be ${min} characters or more` : undefined
    },
    number(value: any) {
        return value && isNaN(Number(value)) ? 'Must be a number' : undefined
    },
    minValue(min: number) {
        return (value: number) => value && value < min ? `Must be at least ${min}` : undefined
    },
    maxValue(max: number) {
        return (value: number) => value && value > max ? `Must be no more ${max}` : undefined
    },
    email(value: string) {
        return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined
    }
    
}