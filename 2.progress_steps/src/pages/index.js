import Head from "next/head";
import styles from "../styles/page.module.css";
import Circle from "@/components/Circle";
import Button from "@/components/Button";
import React, { useState, useEffect } from "react";

export default function Home() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  //cantidad de circulos
  const totalSteps = data.length;
  //activo los contadores
  const [currentStep, setCurrentStep] = useState(1);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  // Calcula el ancho del progress bar en función del currentStep y el total de pasos
  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

  // Controles de los botones de dirección
  const updateSteps = (direction) => {
    if (direction === "Prev" && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    if (direction === "Next" && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Actualiza la habilitación/deshabilitación de los botones
  useEffect(() => {
    setIsPrevButtonDisabled(currentStep === 1);
    setIsNextButtonDisabled(currentStep === totalSteps);
  }, [currentStep, totalSteps]);

  return (
    <>
      <Head>
        <title>Progress steps</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.steps}>
            {data.map((d) => (
              <Circle key={d.id} info={d} isActive={d.id <= currentStep} />
            ))}
            <div
              className={styles.progress_bar}
              style={{ width: `${progressWidth}%`, background: "#4070f4" }}
            >
              <span className={styles.indicator}></span>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              onButtonClick={updateSteps}
              side="Prev"
              disabled={isPrevButtonDisabled}
            />
            <Button
              onButtonClick={updateSteps}
              side="Next"
              disabled={isNextButtonDisabled}
            />
          </div>
        </div>
      </main>
    </>
  );
}
