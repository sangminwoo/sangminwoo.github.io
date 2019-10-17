---
layout: page
permalink: "glossary/a"
title: Glossary
subtitle: A
show-avatar: true
comments: true
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

Agent
---------------------------
인공지능에서 어떤 행위(action)를 수행하는 주체. 보통 강화학습(Reinforcement Learning) 환경에서 행위를 수행하는 주체를 의미할 때가 많다. 환경에 따라서 에이전트(Agent)는 다양한 형태로 구현될 수 있다. 예를 들어, 알파고의 경우 Agent는 바둑을 수행하는 인공지능이고, Atari Breakout(벽돌깨기) 문제의 경우 Agent는 좌우로 움직이며 벽돌깨기를 플레이하는 인공지능이다.

Affine Layer
---------------------------
신경망의 전연결층(Fully connected layer)의 다른 말로, 이전 레이어의 모든 뉴런들이 현재 레이어의 모든 뉴런들에 연결되어있는 레이어를 의미한다. Affine layer의 전형적으로 의 형태를 가지고, 여기서 는 레이어의 입력, 가 파라미터, 가 편향 벡터(bias vector), 가 비선형 활성화 함수(non-linear activation function)이다. 제한적 볼츠만 머신(Restricted Boltzmann Machine, RBM)은 affine layer의 한 예이다.

Attention Mechanism
---------------------------
주의집중 메커니즘(Attention Mechanism)은 자연어처리에서 먼저 착안된 아이디어로, 특정 영역을 집중적으로 학습하도록 하여 모델의 예측 정확도를 높이는 방법으로써 사용된다. Attention은 기존의 RNN기반의 seq2seq모델의 두 가지 문제(Context vector의 정보손실, Vanishing Gradient)를 해결하기 위한 방법으로 등장하게 되었다. 기본 아이디어는 디코더에서 출력 단어를 예측하는 매 시점(time-step)마다, 인코더에서의 전체 입력 문장을 다시 한 번 참고한다는 점이다. 단, 전체 입력 문장을 전부 다 동일한 비율로 참고하는 것이 아니라, 해당 시점에서 예측해야할 단어와 연관이 있는 입력 단어 부분을 좀 더 집중(attention)해서 본다. Attention은 컴퓨터비전 분야에까지 영향을 미치게 되었는데, 사람의 눈이 어떤 물체를 볼때 그 물체만 고해상도로 보고 이외의 부분은 저해상도로 보게된다는 개념에서 유사하게 적용이 된다.

AlexNet
---------------------------
알렉스넷(Alexnet)은 2012년도 이미지넷 대회(ImageNet Large Scale Visual Recognition Challenge, ILSVRC 2012)의 이미지 인식(Image Recognition) 분야에서 가장 큰 성능차이로 우승하며 CNN의 관심을 부활시켰다. 기본적으로 Convolutional Neural Networks (CNN) 구조로, 5개의 convolutional 레이어, maxpooling 레이어, 3개의 전연결층(Fully Connected Layer)과 1000개의 출력을 가지는 softmax로 구성되어 있다.

All-in-focus image
---------------------------
All-in-focus image는 말 그대로 이미지 상의 모든(All) object들이 초점이 맞아(in-focus) 선명하게 보이는 이미지를 말한다. All-in-focus 이미지를 얻기 위해서는 서로 다른 Depth-of-Field(DoF)를 가지는 사진들을 연결하는 Multi-focus image fusion 기술이 필요하다.

Autoencoder(AE)
---------------------------
Input과 Output 노드의 개수가 같은 형태의 Neural Network. Input과 Output 노드의 수가 같으므로 항등 함수를 배우도록 학습된다. Autoencoder는 특히 차원 축소를 위해 사용하는 pre-training 알고리즘으로 볼 수 있다. Forward Propagation과 Back Propagation을 반복하면서 Output이 Input과 비슷해지도록(자기 자신을 재현하도록) 학습하고 모형을 생성한다. 이때 Input Layer와 Hidden Layer 사이에서는 정보 압축(encoding)이 일어나며, Hidden Layer와 Output Layer 사이에서는 정보 복원(decoding)이 일어난다. 이때 hidden layer의 노드 개수가 output layer의 노드 개수보다 적으므로 hidden layer는 input layer에 관한 정보를 압축해서 저장해야만 한다. 따라서 hidden layer는 input layer에 대한 Representative한 Feature를 저장하도록 학습되며 가중치 역시 최적화된다. 따라서 이 hidden layer의 output을 추출해서 이를 인풋 데이터의 압축된 feature으로 이용하면 다른 Task에 적용할 수 있다. (e.g. Classifier의 Input으로 Raw Input 대신 Autoencoder의 Hidden Layer의 Output을 Input으로 사용한다.)

![Alt text](/img/glossary/autoencoder.jpg "Autoencoder(AE)")

Autoencoder의 Architecture와 hidden layer의 output으로부터 추출한 특징(feature)

Autoregressive model
---------------------------
++Need to Fill++

Average Pooling
---------------------------
평균 풀링(Average Pooling)은 이미지 인식을 위해 합성곱 신경망(Convolutional Neural Network,CNN)에서 사용되는 풀링(pooling) 기법 중 하나이다. 특징(feature)이 표현된 레이어 위를 윈도우가 순회(window sliding)하며 해당 윈도우의 모든 값의 평균을 취한다. 이는 입력 표현을 저차원의 표현으로 압축하는 역할을 한다.

---