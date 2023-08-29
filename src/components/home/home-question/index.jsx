import React from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./style.css";

function HomeQuestion() {
  //Get Datas
  const Data = [1, 2, 3, 4];
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_home_question}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.home_question_accordion_box}>
            <div className="home_accordion_box">
              <Accordion allowMultiple>
                {Data.map(() => (
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <h3>Bilim va tushuncha</h3>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <p className={styles.home_question_accordion_subtext}>
                        Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus.Sorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis tellus. Sed dignissim, metus nec fringilla
                        accumsan, risus sem sollicitudin lacus, ut interdum
                        tellus elit sed risus. Maecenas eget condimentum velit,
                        sit amet feugiat lectus.Sorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim, metus nec
                        fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus elit
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default HomeQuestion;
