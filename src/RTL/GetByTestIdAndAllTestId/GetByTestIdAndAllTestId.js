export default function GetByTestIdAndAllTestId(){
    return(
        <div>
            <button data-testId = "btn1">btn1</button>
            <button data-testId = "btn2">btn2</button>
            <button data-testId = "btn3">btn3</button>

            <div data-testId="div-testId">
                div test by id
            </div>

            <div data-testId="p-testId">
                p test by id
            </div>
        </div>
    )
}