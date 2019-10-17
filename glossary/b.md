---
layout: page
permalink: "glossary/b"
title: Glossary
subtitle: from A to Z
bigimg:
  - "/img/big_img/glossary.jpg" : "Photo by Sandy Millar on Unsplash"
show-avatar: true
comments: true
---

B
========

Backpropagation
---------------------------
역전파(Back propagation)는 신경망(Neural Network) 또는 피드포워드 연산 그래프(feedforward computational graph)에서 경사하강법(Gradient Descent)을 수행하기 위한 기본 알고리즘이다. 우선, 정방향 단계에서 각 노드의 출력값이 계산되고 이를 캐시(cache)한다. 이후 역방향 단계에서는 신경망의 출력으로부터 시작하여 각 매개변수에 대해 오차의 편미분(Partial Differential)이 계산되고, 연쇄법칙(Chain Rule)을 통해 역방향으로 전달된다. 이 과정을 반복적으로 거치면서 오차를 최소화 하는 방향으로 파라미터들이 업데이트 된다.

Bag of Words
---------------------------
Bag of Words는 쉽게 말해 문장을 숫자로 표현하는 방법 중 하나이다. 가령, "How are you?" 라고 질문했을 때의 답변으로 "awesome thank you", "great thank you", "not bad not good"가 있을 수 있는데 각각은 다음과 같이 표현할 수 있다.

[awesome, thank, you, great, not, bad, good] 
awesome thank you [1,1,1,0,0,0,0] 
great thank you [0,1,1,1,0,0,0] 
not bad not good [0,0,0,0,2,1,1] 

Bag of Word를 사용하는 이유는 다음과 같다. 
1. 문장의 유사도(Sentence similarity)를 원소곱으로 측정할 수 있다.

- awesome thank you [1,1,1,0,0,0,0] X great thank you [0,1,1,1,0,0,0] = 2 

- great thank you [0,1,1,1,0,0,0] X not bad not good [0,0,0,0,2,1,1] = 0 

2. ML model의 입력값으로 사용 가능하다. ML model은 기본적으로 함수이기 때문에 입력이 수치값이 되어야 하는데, 문장 그 자체는 수치값이 아니다. Bag of words를 통해 문장을 수치로 변환하면 ML model의 입력으로 사용 가능하다.

반면, Bag of Words의 한계도 존재한다.

1. Sparsity: 단어의 개수가 커지면 벡터의 차원이 무수히 커진다.
2. 의미적 유사도보다 단어의 출현 횟수에 더 의존한다.

가령 다음과 같은 문장이 있을 때,

[the, man, like, girl, love] 

- *the man like the girl* [2,1,1,1,0] 

- *the man love the girl* [2,1,0,1,1] 

- *the the the the the* [5,0,0,0,0] 

Bag of Words에서는 위의 두 문장보다 아래 두 문장의 유사도가 더 크다고 판단된다.

- the man like the girl [2,1,1,1,0] X the man love the girl [2,1,0,1,1] = 6 

- the man love the girl [2,1,0,1,1] X the the the the the [5,0,0,0,0] = 10 

3. 단어의 출현 순서를 무시한다. 즉, home run vs. run home 두 문장을 같은 것으로 판단한다.
4. 새로운 단어, 오타, 줄임말에 대응할 수 없다.

Baseline
---------------------------
모델간의 성능을 비교할 때, 참조(Reference)로써 사용되는 모델 또는 휴리스틱(Heuristic)을 의미한다. 기준(Baseline)은 모델 개발자가 특정 문제에 예상되는 최종 성능을 산정하는데 도움을 준다.

Batch
---------------------------
Gradient Descent 알고리즘에서 한 번 업데이트(Update)할 때 사용하는 Training Data의 개수. 즉, data를 나눠서 만든 하나의 묶음. 신경망의 관점에서는 한 번의 순전파/역전파(forward/backward pass)동안 사용되는 학습데이터의 수를 말한다. batch size가 많아질수록 더 많은 메모리 공간을 요구하기 때문에, mini-batch로 나누어서 학습시키는게 일반적이다.

Batch Normalization(BN)
---------------------------
Deep Learning에서의 고질적 문제인 Vanishing/Exploding Gradient Problem은 layer의 수가 깊어질수록 internal covariate shift가 누적되어 발생한다. 배치 정규화(Batch Normalization)는 각 layer의 입력을 정규화하여 internal covariate shift를 줄임으로써 해결한다. 이를 통해 학습 속도를 개선하고 최적화 효과를 높일 수 있다. mini-batch SGD을 사용할 때 parameter update가 mini-batch 단위로 나타나기 때문에 각 mini-batch에 대해서 평균(mean)과 분산(variance)을 구하고, 이 값을 이용하여 각 Layer 노드의 값을 평균 0, 분산 1이 되도록 정규화(Normalization)한다. Whitening과 유사하지만 mean과 variance를 조정하는 과정이 별도의 process로 있는 것이 아니라, 신경망의 중간 layer에 위치하게 되어 back-propagation을 통해 학습이 가능하다는 점에서 whitening과 구별된다.

Bayes' Theory
---------------------------
++ Need to Fill++

Benchmark
---------------------------
문맥을 고려하지 않을 때, 벤치마크(Benchmark)는 솔루션들을 비교할 때 표준이 되고, 어떤 솔루션이 더 낫고 나쁜지 판가름하는 지표라고 이해할 수 수 있다. 하지만 기계학습의 맥락에서, 벤치마크는 이미 성능이 뛰어난 표준 솔루션을 의미한다. 솔루션의 성능을 테스트할 때 주로 훈련/테스트 데이터를 주고 솔루션이 보이는 정확도를 벤치마크와 비교한다. 이를 통해 기존의 벤치마크보다 더 나은 솔루션을 찾을 수 있다. 

Bias
---------------------------
Neural Networks에서 activation function에 들어가기 전에 Input, x와 Weight, W의 곱에 더해지는 값. 즉, 에서 b. 편향(Bias)을 이용함으로써 함수가 더 강력한 표현력을 가지게 된다.

![Alt text](/img/glossary/bias.jpg "Bias")

Wx만을 이용한 이진분류, Wx+b를 이용한 이진분류의 비교

Bias-Variance Tradeoff
---------------------------
![Alt text](/img/glossary/Bias-Variance Tradeoff.png)

Bias와 Variance의 관계는 위 그림을 통해 쉽게 이해할 수 있다. 만약 우리가 error값이 작은 모델을 만들었다고 치자. 이는 Low Bias-Low Variance를 가지고 있는 왼쪽 상단의 그림을 의미한다. 여기서 Variance가 증가하게 되면, 데이터 점들이 흩어지게 되고 error값은 높아질 것이다. 그리고 Bias가 커지면 실제값과 예측값간의 오차는 커지게 된다. 모델을 왼쪽 상단의 그림과 같이 만들 수 있다면 가장 좋겠지만, 아쉽게도 Bias-Variance는 반비례하는 성질을 가지고 있어 둘 간의 균형을 맞추어 주어야 한다. 따라서 아래의 그림에서 Bias와 Variance가 같아지는 최적의 점을 찾아야한다.

![Alt text](/img/glossary/Bias-Variance Tradeoff2.png)

Boltzmann Machine
---------------------------
볼츠만 머신(Boltzmann Machine)은 0 또는 1의 값을 취하는 다수의 뉴런으로 구성된 네트워크로써, 모든 뉴런은 서로 연결되어 있다. 볼츠만 머신은 복잡한 트레이닝 데이터(training data)로 부터 규칙적인 패턴 혹은 유의미한 특징을 발견할 수 있는 학습 알고리즘을 가지고 있다. 하지만 모델 구현이 매우 어렵기 때문에 가시 레이어(visible layer)와 히든 레이어(hidden layer)를 분리시킨 제한된 볼츠만 머신(RBM)의 형태로 주로 사용된다.

Bucketing(Binning)
---------------------------
일정 구간의 연속적인 값(Continuous Value)을 어떤 이산값(Discrete Value)로 Mapping해주는 기법. 일정 구간을 하나의 양동이(Bucket) 또는 통(bin)으로 간주할 수 있기 때문에 Bucketing 또는 Binning으로 불린다. 예를 들어서 0.0~50.0이라는 실수값이 있다면 0~10.0까지의 값은 1, 10.0~20.0까지의 값은 2, 20.0~30.0까지의 값은 3, 30.0~40.0까지의 값은 4, 40.0~50.0까지의 값은 5. 이렇게 5가지의 Discrete value로 0.0~50.0이라는 실수값을 Mapping할 수 있다.

---