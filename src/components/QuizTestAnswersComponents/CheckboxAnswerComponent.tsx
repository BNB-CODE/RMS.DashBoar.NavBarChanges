import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
  } from "@mui/material";
  import { useCallback, useEffect, useState } from "react";
  
  const CheckboxAnswersComponent = (props: any) => {
    const { question, handleCheckboxAnswerChange, selectedAnswers } = props;
    return (
      <>
        <Box>
          <Typography>{`${question.questionNumber}. ${question.questionData.question}`}</Typography>
          <FormGroup>
            {question.questionData.questionOptions.map(
              (option: any, index: any) => {
                console.log("value of option in map is", option);
                return (
                  <FormControlLabel
                    control={
                      <Checkbox disabled
                        // checked={value.includes(option) ? true : false}
                        // checked={value.indexOf(option) !== -1}
                        //checked={question.questionData.QuestionAnswers}
                        checked={question.questionData.questionAnswers.includes(option)}
                        name={option}
                      />
                    }
                    label={option}
                    key={index}
                  />
                );
              }
            )}
          </FormGroup>
        </Box>
        <Box>
      <Typography  justifyContent="space-between" alignItems="center"style={{ padding: 15 }}>
          <strong>{'Answers:'}&ensp;</strong>{`${question.questionData.questionAnswersIds.toString()}`}<br/>
          {`${question.questionData.questionAnswers.toString()}`}
      </Typography>
      </Box>
      </>
    );
  };
  export default CheckboxAnswersComponent;
  