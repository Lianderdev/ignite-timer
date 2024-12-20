import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
    flex-wrap: wrap;
`

const BaseInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};

    }

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};

    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

export const CountdownContainer = styled.div`
    width: 100%;
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background-color: ${(props) => props.theme['gray-700']};
        padding: 2.3rem 1.2rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2.1rem 0;
    margin-right: 1rem;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
`

export const StartCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-weight: bold;

    cursor: pointer;

    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
    }
`