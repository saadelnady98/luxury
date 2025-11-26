'use client'
import { images } from '@/utils/exportsImages'
import Image from 'next/image'
import { Step, Stepper } from 'react-form-stepper'

const StepperComp = ({ stepsCount, activeStep,className }: { stepsCount: number, activeStep: number,className?:string }) => {
    let count = []
    for (let i = 0; i < stepsCount; i++) {
        count.push(i)
    }
    return (
        <div className={className}>
            <Stepper activeStep={activeStep} connectorStateColors connectorStyleConfig={{ stepSize: '20px', activeColor: '#AF6F57', completedColor: '#AF6F57', disabledColor: "", size: '1px', style: '' }} className='!scale-[90%]' dir='ltr'>
                {
                    count.map((_,index) => <Step key={index} style={{ background: '#AF6F57', width:'50px',height:'50px' }}/>)
                }
            </Stepper>
        </div> 
    )
}

export default StepperComp 