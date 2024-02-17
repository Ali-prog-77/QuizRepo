import React, { useState } from "react";
import { Card, Button, Radio, Row, Col } from "antd";

const { Meta } = Card;

const questions = [
  {
    question: "Aliyi yazılım sektörüne ilk kim başlatmıştır?",
    options: [
      "Cihat Fırtına",
      "Gülşen Yasan",
      "Doğkan Saraç",
      "Özgür Yurtsever",
    ],
    correctAnswer: "Özgür Yurtsever",
  },
  {
    question: "En sevdiği yayıncı kimdir?",
    options: ["Pala Baba", "Yakışıklı Güvenlik", "Hakan Yagar", "Jahrein"],
    correctAnswer: "Pala Baba",
  },
  {
    question: "En sevdiği futbolcu kimdir?",
    options: ["Talisca", "Gomez", "Messi", "Quaresma"],
    correctAnswer: "Gomez",
  },
  {
    question: "En sevdiği Roman Hangisidir?",
    options: [
      "Dava",
      "Yalancı Tanıklar Kahvesi",
      "Suç ve Ceza",
      "Bir Gün Tek Başına",
    ],
    correctAnswer: "Suç ve Ceza",
  },

  {
    question:
      "En sevdiği yönetmen kimdir?",
    options: [
      "David Fincher",
      "Quentin Jerome Tarantino",
      "Christopher Edward Nolan",
      "Martin Luciano Scorsese",
    ],
    correctAnswer: "David Fincher",
  },
  {
    question:
      "En sevdiği kurgusal karakter?",
    options: [
      "Raskolnikov",
      "Arthur Morgan",
      "Tony Soprano",
      "Jon Snow",
    ],
    correctAnswer: "Arthur Morgan",
  },
];

const AliQuiz = () => {
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelect = (e) => {
    const selectedOption = e.target.value;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;

  let message;
  if (score >= 0 && score <= 2) {
    message = "Dalga mı geçiyon lan?";
  } else if (score >= 3 && score <= 4) {
    message = "Hiğ?";
  } else {
    message = "OOOO Allah razı olsun kardeşimm!";
  }

  const Result = () => (
    <div style={{ textAlign: "center" }}>
      <h2>Sonuç</h2>
      <p>
        Puanınız: {score} / {questions.length}
      </p>
      <p>{message}</p>
    </div>
  );

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ padding: "50px" , backgroundColor: '#f0f2f5' }}>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
          {/* Soruların tamamını göster */}
          {currentQuestionIndex < questions.length && (
            <Card style={{ width: 800 }}>
              <Meta
                title={
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {currentQuestion.question}
                  </h2>
                }
              />
              <Radio.Group
                onChange={handleAnswerSelect}
                value={userAnswers[currentQuestionIndex]}
              >
                {currentQuestion.options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
              <Button
                type="primary"
                onClick={() => {
                  // Son soruya ulaştıysak sonuçları göster, aksi halde bir sonraki soruya geç
                  if (currentQuestionIndex === questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  } else {
                    goToNextQuestion();
                  }
                }}
                style={{ marginTop: 16 }}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Sonuçları Göster"
                  : "Sonraki Soru"}
              </Button>
            </Card>
          )}
          {/* Sonucu göster */}
          {currentQuestionIndex === questions.length && <Result />}
        </Col>
      </Row>
    </div>
  );
};

export default AliQuiz;
``;
