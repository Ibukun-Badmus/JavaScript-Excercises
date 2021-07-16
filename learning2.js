const useCohort = (initialValue) => {
    let cohort = initialValue
    function setCohort(value){
        cohort = value
    };

    return [cohort, setCohort]
}

let result = useCohort(5);

console.log(result)