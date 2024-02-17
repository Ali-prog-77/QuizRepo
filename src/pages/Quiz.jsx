import React, { useState } from "react";
import { Card, Button, Radio, Row, Col } from "antd";

const { Meta } = Card;

const questions = [
  {
    question: "Kolay bir soruyla başlayalım. Nobel Ödüllü romancımız?",
    options: ["Orhan Pamuk", "Yaşar Kemal", "Zülfü Livaneli", "Aziz Nesin"],
    correctAnswer: "Orhan Pamuk",
  },
  {
    question: "İnce Memed serisinin yazarı kimdir?",
    options: ["Ahmet Ümit", "Yaşar Kemal", "Sabahattin Ali", "Vedat Türkali"],
    correctAnswer: "Yaşar Kemal",
  },
  {
    question: "İlk Psikolojik Türk Romanı Hangisidir?",
    options: ["Eylül", "Kürk Mantolu Madonna", "Mai ve Siyah", "Huzur"],
    correctAnswer: "Eylül",
  },
  {
    question: "Hangisi Vedat Türkali'nin eserlerinden birisi değildir?",
    options: [
      "Güven 1/2",
      "Yalancı Tanıklar Kahvesi",
      "İntibah",
      "Bir Gün Tek Başına",
    ],
    correctAnswer: "İntibah",
  },

  {
    question:
      "1948 yılında işkence ile öldürülen Kürk Mantolu Madonna'nın yazarı edebiyatçımız hangisi?",
    options: [
      "Oğuz Atay",
      "Nazım Hikmet",
      "Sabahattin Ali",
      "Hüseyin Rahmi Gürpınar",
    ],
    correctAnswer: "Sabahattin Ali",
  },
  {
    question:
      "Türk edebiyatının en önemli yazarlarından biri de şüphesiz Oğuz Atay. Peki aşağıdaki eserlerden hangisi ona ait değil?",
    options: [
      "Tutunamayanlar",
      "Tehlikeli Oyunlar",
      "Korkuyu Beklerken",
      "Küçük Ağa",
    ],
    correctAnswer: "Küçük Ağa",
  },
];

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
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
  
    const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  
    let message;
    if (score >= 0 && score <= 2) {
      message = "Biraz daha çalışıp tekrar denemelisin :(";
    } else if (score >= 3 && score <= 4) {
      message = "Hiç fena değil daha fazla çalışarak daha iyisini yapabilirsin.";
    } else {
      message = "Tek kelimeyle Süper!";
    }
  
    const Result = () => (
      <div style={{ textAlign: 'center' }}>
        <h2>Sonuç</h2>
        <p>Puanınız: {score} / {questions.length}</p>
        <p>{message}</p>
      </div>
    );
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div style={{ padding: '50px'  , backgroundColor: '#f0f2f5' }}>
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col>
            {/* Soruların tamamını göster */}
            {currentQuestionIndex < questions.length && (
              <Card style={{ width: 800 }}>
                <Meta title={<h2 style={{ whiteSpace: 'pre-line' }}>{currentQuestion.question}</h2>} />
                <Radio.Group onChange={handleAnswerSelect} value={userAnswers[currentQuestionIndex]}>
                  {currentQuestion.options.map((option, index) => (
                    <Radio key={index} value={option}>{option}</Radio>
                  ))}
                </Radio.Group>
                <Button type="primary" onClick={() => {
                  // Son soruya ulaştıysak sonuçları göster, aksi halde bir sonraki soruya geç
                  if (currentQuestionIndex === questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  } else {
                    goToNextQuestion();
                  }
                }} style={{ marginTop: 16 }}>
                  {currentQuestionIndex === questions.length - 1 ? "Sonuçları Göster" : "Sonraki Soru"}
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
  
  export default Quiz;