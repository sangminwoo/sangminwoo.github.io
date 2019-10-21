---
layout: page
permalink: "glossary/atod"
title: Glossary
subtitle: A to D
show-avatar: true
comments: true
---

---


| [A](#a) | [B](#b) |
|:-------:|:-------:|
| **[C](#c)** | **[D](#d)** |

---

A
======

Ablation Study
---------------------------
Ablation study는 모델이나 알고리즘을 구성하는 다양한 구성요소(component) 중 어떠한 “feature”를 제거할 때, 성능(performance)에 어떠한 영향을 미치는지 파악하는 방법을 말한다. 좀 더 막연한(coarse) 정의로는, 제안한 요소가 모델에 어떠한 영향을 미치는지 확인하고 싶을 때, 이 요소를 포함한 모델과 포함하지 않은 모델을 비교하는 것을 말한다. 이는 딥러닝 연구에서 매우 중요한 의미를 지니는데, 시스템의 인과관계(causality)를 간단히 알아볼 수 있기 때문이다.

Accuracy
---------------------------
정확도(Accuracy)는 분류 모델의 성능을 나타내는 지표 중 하나로, 데이터셋을 구분하는 두 개 이상의 클래스가 있을 때 이를 정확히 분류해내는 정도를 의미한다. 이진 분류(Binary Classification)에서 정확도의 정의는 조금 더 명료하다. 혼동행렬(Confusion Matrix)에서 차용한 개념으로, 전체 데이터셋에 대해 참양성(True Positive, TP)과 참음성(True False, TF)으로 예측한 개수를 말한다.

![Alt text](/img/glossary/accuracy.jpg "Accuracy")

Activation Function
---------------------------
Input값, x와 Weight, W를 곱하고 bias, b를 더한 뒤 씌워주는 활성화(Activation) 함수, . 즉, 활성 함수의 출력 값은 이다. Activation Function으로 전통적으로 Sigmoid나 Tanh을 많이 사용했지만 최근에는 ReLU를 많이 사용한다. 활성 함수를 씌움으로써 Neural Networks는 비선형(Non-Linear)적인 함수(Function)도 Approximate할 수 있다.

Actor Critic
---------------------------
++Need to Fill++

AdaDelta
---------------------------
AdaDelta(Adaptive Delta)도 AdaGrad와 마찬가지로 학습률(learning rate)을 시간의 변화에 따라 조정한다. 하지만 AdaGrad는 학습률(learning rate)이 너무 빠르게 감소하여 non-convex한 환경에서 극솟값(local minimum)에 갇혀버리는 단점이 존재한다. AdaDelta는 이를 보완하기 위해 제안된 방법으로써, AdaGrad와 달리 gradient의 제곱 합 대신 지수평균을 사용한다. 이러한 점에서는 RMSProp와 유사하지만, 파라미터를 업데이트하는 방식에서 step size 변화량(Delta)의 제곱근을 사용한다는 점에서 RMSProp과 차이점을 보인다.

AdaGrad
---------------------------
AdaGrad(Adaptive Gradient Descent)는 적응형 학습률 변화 알고리즘(adaptive learning rate algorithm)으로, 기울기(gradient)의 제곱을 시간의 변화에 따라 계속 유지하도록 하는 것이 특징이다. 쉽게 말하자면, 학습률을 줄여나가고 속도를 계산하여 학습의 갱신강도를 적응적으로 조정해나가는 방법이다. 자주 업데이트 된 파라미터들은, 최적값(optimum value)에 가까이 있다고 여겨 step size(혹은 learning rate)를 작게 조정하고, 반대의 경우, 최적값에서 멀리 떨어져 있다고 여기고 step size를 크게 두어 빠르게 loss 값을 줄이는 방향으로 조정한다. 즉, 파라미터들을 업데이트할 때, 더 움직인 파라미터는 덜 움직이게, 덜 움직인 파라미터는 더 움직이게끔 step size를 자동으로 조정해주는 방식이다. 이러한 특징 때문에 “적응형(adaptive)”이라는 명칭이 붙었다. 하지만 AdaGrad는 학습이 오래 진행될 경우, step size가 너무 작아져서 결국 거의 움직이지 않게 된다는 문제점이 존재한다.

Adam
---------------------------
Adam(Adaptive Moment Estimation)은 RMSProp에 모멘텀(Momentum)을 섞어놓은 방식이다. 모멘텀 방식과 유사하게 지금까지 계산해온 기울기의 지수평균을 저장하며, RMSProp과 유사하게 기울기의 제곱값의 지수평균을 저장한다. 쉽게 생각하면 RMSProp의 조금 더 안정화된 버전이다. Adam 업데이트 절차 중에는 편향 보정(bias correction) 메커니즘이 반영되어 있는데, 벡터 m,v가 나중에 완벽하게 “워밍업” 되기 전에 (iteration의 처음 몇 스텝에서) 초기화되어 0에 편향되어 있다는 점을 보상하기 위해서이다.

Affine Layer
---------------------------
신경망의 전연결층(Fully connected layer)의 다른 말로, 이전 레이어의 모든 뉴런들이 현재 레이어의 모든 뉴런들에 연결되어있는 레이어를 의미한다. Affine layer의 전형적으로 의 형태를 가지고, 여기서 는 레이어의 입력, 가 파라미터, 가 편향 벡터(bias vector), 가 비선형 활성화 함수(non-linear activation function)이다. 제한적 볼츠만 머신(Restricted Boltzmann Machine, RBM)은 affine layer의 한 예이다.

Agent
---------------------------
인공지능에서 어떤 행위(action)를 수행하는 주체. 보통 강화학습(Reinforcement Learning) 환경에서 행위를 수행하는 주체를 의미할 때가 많다. 환경에 따라서 에이전트(Agent)는 다양한 형태로 구현될 수 있다. 예를 들어, 알파고의 경우 Agent는 바둑을 수행하는 인공지능이고, Atari Breakout(벽돌깨기) 문제의 경우 Agent는 좌우로 움직이며 벽돌깨기를 플레이하는 인공지능이다.

AlexNet
---------------------------
알렉스넷(Alexnet)은 2012년도 이미지넷 대회(ImageNet Large Scale Visual Recognition Challenge, ILSVRC 2012)의 이미지 인식(Image Recognition) 분야에서 가장 큰 성능차이로 우승하며 CNN의 관심을 부활시켰다. 기본적으로 Convolutional Neural Networks (CNN) 구조로, 5개의 convolutional 레이어, maxpooling 레이어, 3개의 전연결층(Fully Connected Layer)과 1000개의 출력을 가지는 softmax로 구성되어 있다.

All-in-focus image
---------------------------
All-in-focus image는 말 그대로 이미지 상의 모든(All) object들이 초점이 맞아(in-focus) 선명하게 보이는 이미지를 말한다. All-in-focus 이미지를 얻기 위해서는 서로 다른 Depth-of-Field(DoF)를 가지는 사진들을 연결하는 Multi-focus image fusion 기술이 필요하다.

Attention Mechanism
---------------------------
주의집중 메커니즘(Attention Mechanism)은 자연어처리에서 먼저 착안된 아이디어로, 특정 영역을 집중적으로 학습하도록 하여 모델의 예측 정확도를 높이는 방법으로써 사용된다. Attention은 기존의 RNN기반의 seq2seq모델의 두 가지 문제(Context vector의 정보손실, Vanishing Gradient)를 해결하기 위한 방법으로 등장하게 되었다. 기본 아이디어는 디코더에서 출력 단어를 예측하는 매 시점(time-step)마다, 인코더에서의 전체 입력 문장을 다시 한 번 참고한다는 점이다. 단, 전체 입력 문장을 전부 다 동일한 비율로 참고하는 것이 아니라, 해당 시점에서 예측해야할 단어와 연관이 있는 입력 단어 부분을 좀 더 집중(attention)해서 본다. Attention은 컴퓨터비전 분야에까지 영향을 미치게 되었는데, 사람의 눈이 어떤 물체를 볼때 그 물체만 고해상도로 보고 이외의 부분은 저해상도로 보게된다는 개념에서 유사하게 적용이 된다.

Autoencoder(AE)
---------------------------
Input과 Output 노드의 개수가 같은 형태의 Neural Network. Input과 Output 노드의 수가 같으므로 항등 함수를 배우도록 학습된다. Autoencoder는 특히 차원 축소를 위해 사용하는 pre-training 알고리즘으로 볼 수 있다. Forward Propagation과 Back Propagation을 반복하면서 Output이 Input과 비슷해지도록(자기 자신을 재현하도록) 학습하고 모형을 생성한다. 이때 Input Layer와 Hidden Layer 사이에서는 정보 압축(encoding)이 일어나며, Hidden Layer와 Output Layer 사이에서는 정보 복원(decoding)이 일어난다. 이때 hidden layer의 노드 개수가 output layer의 노드 개수보다 적으므로 hidden layer는 input layer에 관한 정보를 압축해서 저장해야만 한다. 따라서 hidden layer는 input layer에 대한 Representative한 Feature를 저장하도록 학습되며 가중치 역시 최적화된다. 따라서 이 hidden layer의 output을 추출해서 이를 인풋 데이터의 압축된 feature으로 이용하면 다른 Task에 적용할 수 있다. (e.g. Classifier의 Input으로 Raw Input 대신 Autoencoder의 Hidden Layer의 Output을 Input으로 사용한다.)

![Alt text](/img/glossary/autoencoder.jpg "Autoencoder(AE)")

Autoencoder의 Architecture와 hidden layer의 output으로부터 추출한 특징(feature)

AutoML
---------------------------
++Need to Fill++

Autoregressive model
---------------------------
++Need to Fill++

Average Pooling
---------------------------
평균 풀링(Average Pooling)은 이미지 인식을 위해 합성곱 신경망(Convolutional Neural Network,CNN)에서 사용되는 풀링(pooling) 기법 중 하나이다. 특징(feature)이 표현된 레이어 위를 윈도우가 순회(window sliding)하며 해당 윈도우의 모든 값의 평균을 취한다. 이는 입력 표현을 저차원의 표현으로 압축하는 역할을 한다.

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

Beam Search
---------------------------
++Need to Fill++

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

C
==========

Captioning
---------------------------
이미지에 대한 설명 + Labeling   

CIFAR-10 (CIFAR-100)
---------------------------
CIFAR-10과 CIFAR-100은 라벨링된 8000만개의 작은 이미지 데이터셋이다. AlexNet의 Alex Krizhevsky 등이 수집하였다.
- CIFAR-10
CIFAR-10 데이터셋은 10개의 클래스 안에 6000장씩, 총 60000장의 32X32 칼라이미지를 포함한다. 50000개의 훈련이미지와 10000장의 테스트이미지로 구성되어있다. 훈련 배치(training batch)와 테스트 배치(test batch)의 비율은 5:1이다. 테스트 배치는 각 클래스 당 1000장의 무작위로 선택된 이미지를, 훈련 배치는 각 클래스 당 나머지 5000장을 임의의 순서(random order)로 포함한다. 그러므로 훈련 배치는 특정 클래스에서 더 많은 이미지를 포함할 수도 있다. 클래스는 완전히 상호배제적(mutually exclusive)이다. 즉, ‘automobile’과 ‘truck’ 클래스 사이에는 겹치는 부분이 없다. ‘automobile’은 세단이나 SUV와 같은 것들을 포함하고, ‘truck’은 오로지 트럭만을 포함한다. 양쪽 다 소형트럭(pickup truck)은 포함하지 않는다.
- CIFAR-100
100개의 클래스 각각이 600장의 이미지로 구성된다는 점만 제외하면 CIFAR-10과 동일하다. 각각의 클래스는 500장의 훈련이미지와 100장의 테스트 이미지로 구성된다. CIFAR-100의 100개의 클래스는 20개의 슈퍼클래스(superclass)로 다시 묶일 수 있다. 각각의 이미지는 “가는(fine)” label(이미지가 속한 클래스) 혹은 “굵은(coarse)” label(이미지가 속한 슈퍼클래스)이 함께 제공된다.

Classification
---------------------------
이미지 분류란 어떤 이미지의 주제나 물체를 미리 정의한 클래스들로 분류하는 것을 목표로 하는 컴퓨터비전 문제이다. 가령, 아이한테 image flash card를 보여주고 어떤 물체가 그려져 있는지 물어보는 것이다. 이 이미지는 0~9까지의 숫자 중에 무엇인가?, 이 이미지는 강아지인가 고양인가? 등의 문제를 맞추는 것이 Classification(분류) 문제이다.

Clustering
---------------------------
라벨(label)이 없는 데이터에 대한 군집화이며, 특히 비지도 학습(Unsupervised Learning)에서 사용된다. 모든 데이터가 그룹으로 묶이고 나면 사람이 선택적으로 각 클러스터에 라벨을 붙일 수(labeling) 있다. 클러스터링(Clustering)의 한 종류인 k-평균 알고리즘(K-means Algorithm)은 아래 그림과 같이 각 데이터의 중심(centroid)에 가까운 정도를 기준으로 클러스터링 한다.

![Alt text](/img/glossary/clustering.jpg "Clustering")

Computational Graphs
---------------------------
연산그래프(Computational Graph)는 각 노드가 연산(operation) 혹은 변수(variable)인 유향그래프(directed graph)이다. 변수 노드는 그 값을 연산 노드에 먹일 수 있으며, 연산 노드에 대한 출력은 또 다른 연산 노드에 먹일 수 있다. 결과적으로 연산그래프의 모든 노드는 어떤 변수에 대한 함수로써 정의된다.

![Alt text](/img/glossary/computational_graphs.jpg "Computational Graphs")

Concave
---------------------------
Concave function은 위로 볼록한 형태로 국소 최댓값(Local Maximum)이 유일하고, 전역 최댓값(Global Maximum)과 일치하는 함수를 말한다. 간단한 예로, n자 형태인 이 있다. 위로 볼록(Concave)이나 아래로 볼록(Convex) 중 한 가지로만 정의할 수 없는 형태의 함수들의 경우, 위로 볼록(concave)또는 아래로 볼록(convex)으로 구분할 수 없다.

Confusion Matrix
---------------------------
오류의 경향을 세밀하게 분석할 때, 혼동행렬(Confusion Matrix)을 사용한다. Confusion Matrix를 살펴보면 분류기가 어떤 부류를 다른 부류로 혼동하는지 경향을 일목요연하게 파악할 수 있다. 아래의 표는 이진 분류(Binary Classfication)의 Confusion Matrix을 보여주는데, 는 부류 에 속하는 샘플을 로 분류한 것의 개수이다. 표에서 확인할 수 있듯이 이진 분류의 결과는 네 가지로 나눌 수 있다. 을 으로 옳게 분류한 샘플은 TP(True Positive), 를 로 옳게 분류한 샘플은 TN(True Negative), 을 로 틀리게 분류한 샘플은 FN(Fasle Negative), 를 으로 틀리게 분류한 샘플은 FP(False Positive)이라 한다. 혼동행렬(Confusion Matrix)을 통해 정확도(Precision), 재현율(Recall) 등 모델 성능을 평가하는 다양한 지표를 측정할 수 있다.

![Alt text](/img/glossary/confusion_matrix.jpg "Confusion Matrix")

Convex function
---------------------------
Convex function은 아래로 볼록한 형태로 국소 최솟값(Local Minimum)이 유일하고, 전역 최솟값(Global Minimum)과 일치하는 함수를 말한다. 간단한 예로, U자 형태인 이 있다.

Cost Function
---------------------------
가설(Hypothesis)이 얼마나 정확한지 판단하는 기준이 된다. 즉, 실제 값과 예측 값(가설)의 차이를 나타낸다. 말 그대로 비용함수이기 때문에 최소화 할수록 좋다. 종종 손실함수(Loss function)와 동일한 것으로 보는 경우도 있으나, 비용함수는 손실함수에 비해 조금 더 광범위하거나 일반적인(coarse) 개념으로 이해된다. 가령, 전체 학습데이터에 대한 손실함수(loss function)의 총합에 모델의 복잡도 패널티(Complexity Penalty)의 개념을 포함하는 것이 비용함수이다.

Convolution
---------------------------
앞단의 layer에 대해 각각의 filter를 convolution 함으로써 얻어진 feature map은 앞단의 layer와 filter의 유사도(얼마나 비슷한지)를 나타낸다. 각각의 filter는 convolution 연산을 통해 다음 단에서 feature map의 각 채널로 치환된다.

Convolutional Neural Networks(CNN)
---------------------------
Convolution Layer, Subsampling(Pooling) Layer, Fully Connected Layer로 구성된 Neural Networks. Supervised Learning을 위해 사용된다. 기존의 Neural Networks는 인풋 데이터 사이즈가 커지면 계산량이 기하급수적으로 증가하는 문제점이 있었다. 따라서 이미지와 같이 인풋 데이터의 dimension이 큰 경우를 다루기 위해서 합성공 신경망(Convolution Neural Networks, CNN)이 제안되었다. CNN은 raw 인풋 데이터로부터 Convolution Layer를 통해 유의미한 특징들(features)만을 추출하고, 이어서 Subsampling (Pooling) Layer 를 통해 Convolution Layer로부터 추출된 결과값의 dimension을 축소시킨다. 이런 과정을 반복한 후 마지막 Fully Connected Layer에서 압축된 Feature를 통해 Classification과 같은 prediction을 수행한다. 현재 딥러닝이 적용가능한 대부분의 Task에서 활발히 사용되고 있는 가장 인기 있는 모델 구조이다.

![Alt text](/img/glossary/convolution_neural_networks.jpg "Convolutional Neural Networks")

일반적인 Convolutional Neural Network의 Architecture

Corpus
---------------------------
말뭉치(corpus)는 자연어처리에서 흔히 사용되는 용어로, 특정 목적을 위해 추출된 커다란 언어 데이터셋을 의미한다.

Covariate Shift
---------------------------
학습하는 도중에 이전 layer의 파라미터(parameter) 변화로 인해 현재 layer의 입력의 분포가 바뀌는 현상을 Internal Covariate Shift라고 한다. 학습 시 현재 layer의 입력은 이전의 모든 layer에서의 parameter 변화에 영향을 받고, layer가 깊어짐에 따라 parameter의 변화가 증폭되어 뒷단에 더 큰 영향을 끼치게 된다. 결과적으로 training data와 test data의 data distribution이 달라지게 된다. 이는 귀마개를 한 채 상대방의 입모양을 보고 무슨 말인지 알아내는 게임으로 비유할 수 있다. 이를 해결하는 방법으로, whitening과 Batch Normalization이 제시되었다.

![Alt text](/img/glossary/covariate_shift.jpg "Covariate Shift")

Cross-Entropy Function
---------------------------
Neural Networks의 Cost Function으로 널리 사용되는 Function 중 하나. 아래와 같이 정의된다.

![Alt text](/img/glossary/cross_entropy_function.jpg "Cross-Entropy Function")

MSE(Mean Squared Error, 평균 제곱 오차) Cost Function을 사용했을 경우 발생하는 Neural Networks의 학습속도 저하(Slowdown) 문제가 없기 때문에 MSE Cost Function보다 더욱 널리 사용된다.

Cross Validation
---------------------------
교차 검증(Cross Validation)은 전체 데이터의 크기가 5라고 할 때, 4를 훈련 데이터, 나머지 1을 테스트 데이터로 두고, 훈련 데이터와 테스트 데이터의 조합을 바꿔가며 학습한 5개의 모델로 정확도를 측정하는 방법이다. 5개 모형의 정확도에 대한 평균을 계산하여 이를 모델의 정확도로 삼는다. 그리고 모델의 안정성을 나타내는 지표로 표준편차 값을 함께 계산한다.

![Alt text](/img/glossary/cross_validation.jpg "Cross Validation")

---

D
=========

Deep Neural Network(DNN)
---------------------------
심층신경망(Deep Neural Network)은 딥러닝(Deep Learning)의 주요 메커니즘이다. 일반적인 신경망(Neural Network)에 비해 깊은 층(Deep Layer)을 가지기 때문에 심층신경망(Deep Neural Network)이라고 부른다. NN과 DNN 모두 퍼셉트론(Perceptron)을 여러 개 조합해서 구성한 것이므로 다층 퍼셉트론(Multi-Layer Perceptron, MLP)이라 볼 수 있다.

Dense Layer
---------------------------
밀집레이어(Dense Layer)는 전연결층(Fully Connected Layer)과 같은 뜻으로 사용된다.

Depth of Field
---------------------------
Depth of Field(DOF)는 이미지 상에서 초점이 맞은것으로 인식되는 범위이다. 실제 사진에서는 초점면(focal plane)을 중심으로 서서히 흐려지는 현상이 나타나는데, 이 때 충분히 초점이 맞은것으로 인식되는 영역을 in-focus, 초점이 맞지않아 흐려지는 영역을 out-focus 라고 한다. 이 중 사진 상에서 in-focus된 object들 가운데 가장 먼 곳 까지의 거리를 DOF라고 한다. 즉, DOF가 크면 사진상으로 먼 곳까지도 선명하게 표현될 것이고, DOF가 작으면 흐려질 것이다.

Discriminative model
---------------------------
일반적으로 판별모델(Discriminative model)은 지도학습에 사용되며, 클래스 간의 의사결정 경계(decision boundary)를 모델링한다. 학습데이터에서 각각의 조건부 확률 분포(Conditional Probability Distribution), 를 학습하여 그 차이를 구분한다.

Disparity Map
---------------------------
Disparity map은 스테레오 이미지 쌍 사이의 명확한 pixel 차이 또는 움직임을 나타낸다. 예를 들어, 한쪽 눈을 감은 상태에서 반대쪽 눈을 감는 동안 다시 빠르게 한쪽 눈을 떠보면 disparity를 몸소 느낄 수 있다. 가까이 있는 물체들은 그 위치가 상당히 많이 차이가 나는 반면, 멀리 있는 물체는 거의 움직이지 않는다. 그 움직임이 바로 disparity이다. 스테레오 카메라에서 얻은 한 쌍의 이미지에서 pixel간의 명확한 움직임을 측정할 수 있고, 그 intensity를 통해 만든 이미지가 Disparity Map이다. 

Dithering
---------------------------
디더링(Dithering)은 제한된 색을 이용하여 음영이나 색을 나타내는 것이며, 여러 컬러의 색을 최대한 맞추는 과정이다. 그래픽 디자이너의 색채공간 속에서 하나의 세기가 아닌 다른 픽셀 세기로 구성되기 때문에 낟알이 많은 것처럼 다소 거칠게 보일 수 있다.

Dropout
---------------------------
일반적으로 신경망에서 layer가 깊어질수록 학습 능력은 좋아지지만, 학습시간이 길어지고 과적합(overfitting)의 문제가 발생할 수 있다. layer의 개수가 많아졌을 때, 과적합을 억제하기 위한 해결책 중 하나로 망부분생략(Dropout)을 사용한다. 이는 아래의 그림과 같이 각 층의 노드 중 일정 비율을 생략(drop)하고 그 외의 노드만 사용해 학습을 진행하는 방법이다. 일정한 mini-batch 구간 동안 생략된 망에 대한 학습을 끝내면, 다시 무작위로 다른 뉴런들을 생략하여 반복적으로 학습을 수행한다. 다음은 dropout의 대표적인 2가지 효과이다.

1. 투표(Voting) 효과: dropout을 무작위로 반복하게 되면, voting에 의한 평균 효과를 얻을 수 있기 때문에 결과적으로 regularization과 비슷한 효과를 얻게 된다.
2. 강건(Robust)한 모델: 특정 뉴런이 bias나 weight가 큰 값을 가질 때, 그 영향으로 인해 다른 뉴런들의 학습속도가 느려지거나 제대로 진행되지 못하는 경우가 있다. 하지만 dropout을 사용하여 학습하게 되면, 다른 뉴런이 특정 뉴런의 bias나 weight의 영향을 받지 않기 때문에 결과적으로 뉴런들이 서로 co-adaptive되는 것을 방지할 수 있다. 즉, 특정 학습데이터나 자료에 영향을 받지 않는 robust한 망을 구성할 수 있다.

![Alt text](/img/glossary/dropout.jpg "Dropout")

---