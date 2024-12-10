import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

import { useForm } from 'react-hook-form'

export function Home() { 
    const list = [
        'projeto 1', 'projeto 2', 'banana'
    ]
    
    // Register => método para adicionar um input ao meu form, (Quais são os campus que eu terei no meu form). Ele retorna vário métodos nativos

    const { register, handleSubmit, watch } = useForm()


    const handleCreateNewCycle = (data: any) => {
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        type="text" 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto" 
                        list="task-suggestions"
                        {...register('task')}
                    />
                    
                    <datalist id="task-suggestions">
                        {list.map((item) => {
                            return <option key={item} value={item}/>
                        })}
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount" 
                        placeholder="00" 
                        min={0}
                        max={60}
                        {...register('minutesAmount', {
                            valueAsNumber: true
                        })}
                    />

                    <span>minutos .</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}