import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useState } from "react";

export function Home() {

    const [task, setTask] = useState('')

    const list = [
        'projeto 1', 'projeto 2', 'banana'
    ]

    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        type="text" 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto" 
                        list="task-suggestions"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
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

                <StartCountdownButton type="submit" disabled={!task}>
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}