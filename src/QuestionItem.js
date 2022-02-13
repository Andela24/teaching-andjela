import React from 'react';

export default function QuestionItem({ question, answer }) {
    return <>
        <h1>{question}</h1>
        <h3>{answer}</h3>
    </>;
}
