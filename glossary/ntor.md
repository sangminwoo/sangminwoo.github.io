---
layout: page
permalink: "glossary/ntor"
title: Glossary
subtitle: N to R
show-avatar: true
comments: true
---

# Contents

| [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) |
|:-------:|:-------:|:-------:|:-------:|:-------:|

N
=======

NAS
---------------------------
++Need to Fill++

Negative Log Likelihood(NLL)
-----------------------------
Maximum Likelihood Estimation(MLE)을 negative 형태로 바꿔서 formulation한 형태. 즉, Negative Log Likelihood(NLL) formulation에서는 maximize하는 parameter가 아니라 minimize하는 파라미터를 찾게 된다. 보통 Optimization Algorithm이 Objective Function을 minimize하도록 구현되어 있기 때문에 MLE문제를 NLL 형태로 바꿔서 최적화(Optimization)하는 경우가 많다.

![Alt text](/img/glossary/negative_log_likelihood.jpg "Negative Log Likelihood(NLL)")

Nesterov Accelerated Gradient (NAG)
-----------------------------------
Nesterov Accelerated Gradient(NAG)는 기본적으로 모멘텀 업데이트(Momentum update)와 유사하지만, gradient를 계산하는 방법이 미묘하게 다르다. Momentum update는 actual step을 계산할 때 현 위치를 기준으로 gradient step과 momentum step을 합한 방향으로 이동하기 때문에, 최적값에 도달했을 때 멈추지 못하고 관성에 의해 멀리 가버릴 수도 있다. 반면, NAG 방식의 경우는 일단 momentum step을 이동한 위치에서 gradient step을 내다본 후(“lookahead”) 이동 방향을 결정하게 되기 때문에, Momentum 방식에 비해 보다 효과적으로 이동할 수 있다. 결과적으로 NAG는 Momentum update의 빠른 이동속도에 대한 이점은 유지하면서, 멈춰야 할 시점에서 제동을 걸기에도 용이한 방식이다. 

![Alt text](/img/glossary/nesterov_accelerated_gradient.jpg "Nesterov Accelerated Gradient (NAG)")

N-gram
-----------------------------------
N-gram은 n개의 token(Word 또는 Character)이 연속적으로 구성된 것을 말한다. "fine thank you"라는 문장이 있을 때, N-gram은 다음과 같이 구성된다.

1-gram(unigram) 
- Word level: [fine, thank you] 
- Character level: [f, i, n, e,  , t, h, a, n, k,  , y, o, u] 

2-gram(bigram)
- Word level: [fine thank, thank you]
- Character level: [fi, in, ne, e ,  t, th, ha, an, nk, k ,  y, yo, ou]

3-gram(trigram)
- Word level: [fine thank you]
- Character level: [fin, ine, ne , e t,  th, tha, han, ank, nk , k y,  yo, you]

이는 bag of words가 단어의 순서를 무시하는 단점을 어느정도 극복할 수 있으며, 다음 단어가 무엇이 오는지 예측하거나 오타를 발견 등 여러 task에도 사용할 수 있다. 가령 "machine learning is fun and is not boring"이라는 문장이 있을 때 bag of words에서는 [machine, learning, is, fun, and, not, boring] = [1, 1, 2, 1, 1, 1, 1]가 된다. 한 번 bag에 word를 집어넣는 순간 "not"이 fun 앞에 해당하는지 boring 앞에 해당하는지를 알 수 없게 된다. 즉, 다른 의미를 같은 표현으로 묶어버리게 된다. 반면, bag of bigram을 살펴보면 [machine learning, learning is, is fun, fun and, and is, is not, not boring] = [1, 1, 1, 1, 1, 1, 1]가 되어 문맥을 숫자로 표현할 수 있다. 또한 "quality, quarter, quit" 세 단어를 bag of bigram로 만들 경우, [qu, ua, al, li, it, ty, ar, rt, te, er, ui] = [3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1]이 되어 "qwal"이라는 단어를 입력했을 때, "qw"를 오타로 인식하고 "qual"로 수정할 수 있다.

Normalization
---------------------------
정규화(Normalization)는 어떤 값들을 정규화 된 상태로 변환하여 변수의 범위를 일정하게 혹은 비교 가능하게 하려는 것을 말한다. 예를 들어, 아래 식을 이용해서 데이터들의 평균(mean)이 0이고 표준 편차(standard deviation)가 1인 상태로 원본 데이터 X의 분포를 정규화할 수 있다.

![Alt text](/img/glossary/normalization.jpg "Normalization")

---

O
========

Object Recognition
---------------------------
객체 인식

One-hot encoding
---------------------------
범주형값(Categorical value)을 이진화된 값(binary value)로 바꿔서 표현하는 것. 범주형 데이터에 머신러닝 알고리즘을 적용하고자 할 때 거의 대부분 사용된다. 예를 들어 “한국”, “미국”, “일본”이라는 세 개의 범주형 데이터가 있을 때, 이를 “한국”=1,”미국”=2,”일본=”3″이라고 단순하게 integer encoding으로 변환하여 표현할 수도 있지만 one-hot encoding을 사용하면 “한국”=[1 0 0],”미국”=[0 1 0], “일본”=[0 0 1] 이런 형태로 binary value로 표현한다. 단순한 integer encoding의 문제점은 머신러닝 알고리즘이 integer value로부터 잘못된 경향성을 학습하게 될 수도 있다는 점이다. 예를 들어, 위의 예시의 경우 integer encoding을 사용할 경우 머신러닝 알고리즘이 “한국”(=1)과 “일본”(=3)의 평균(1+3/2=2)은 “미국”(=2)이다. 라는 지식을 학습할 수도 있는데 이는 명백히 잘못된 학습이다.

Optimization
---------------------------
딥러닝 모델 학습에 있어서 최적화(Optimization)란 일반적으로 파라미터의 최적화를 의미한다. 최적값을 찾는 과정은 산 정상을 내려갈 때, 지름길을 찾아 빠른 보폭으로 내려가는 것과 비교할 수 있다. 일단 산을 손실함수(loss function) 혹은 비용함수(cost function)라고 하자. 정상에서 내려갈 수 있는 여러 갈래 중 지름길을 찾는 것은 스텝의 방향을 잘 설정하는 것과 같고, 빠른 걸음으로 내려오는 것은 스텝의 크기(step size) 혹은 학습률(learning rate)과 같다. 적절한 최적화를 위해서는 스텝의 크기와 방향 두 가지 요소가 모두 충족되어야 한다.

Optimizer
---------------------------
Optimizer은 최적화(Optimization)를 위한 알고리즘 혹은 기법을 의미한다. 이 최적화기법(Optimizer)는 스텝의 방향과 스텝 사이즈(step size)에 따라 분류될 수 있다.

![Alt text](/img/glossary/optimizer.jpg "Optimizer")

Ordinary Least Squares(OLS)
---------------------------
OLS(Ordinary Least Squares) 또는 LLS(Linear Least Squares)라고 불리며, 선형회귀(Linear Regression)에서 해를 찾는 방법 중 하나이다. Sum of Squares Error(Residual Sum of Squares)를 최소화하는 가중치 벡터를 행렬 미분으로 구하는 방법이다.

Overfitting
---------------------------
모델의 복잡도(Complexity)에 비해 학습데이터가 단순하면, 학습을 하면서 weight의 값이 점점 커지고 모델은 학습데이터에 영향을 많이 받게 되어 결국 학습데이터에 모델이 맞춰지는 과적합(Overfitting) 현상이 발생한다. 이를 다르게 표현하면 local noise의 영향을 크게 받아, outlier들에 모델이 맞춰지는 현상이라고 할 수 있다. 학습 과정에서 머신 러닝 알고리즘이 Training Data에 과도하게 최적화되어 Training Data에 대해서는 잘 동작하지만 이제까지 보지 못한 새로운 데이터들인 Test Data에 대해서는 잘 동작하지 못하는 현상을 말한다. 즉, Generalization 능력이 떨어지게 학습이 된 상황을 뜻한다. 보통 머신 러닝 알고리즘의 표현력이 지나치게 강력할 경우 발생하는 현상이다. 다른 말로 High Variance-Low Bias라고도 한다. 이를 방지하기 위해 Regularization 등의 기법을 이용한다.

![Alt text](/img/glossary/overfitting.jpg "Overfitting")

Overfitting이 발생한 상황(맨 오른쪽 그림)

---

P
=======

Parallax
---------------------------
시차(Parallax)는 원래 천문학에서 사용하던 용어로, 고정된 먼 배경이 존재하는 상황에서 한 물체를 서로 다른 위치에서 바라보았을 때 발생하는 겉보기 위치의 차이를 말한다. 같은 물체라도 멀리서 볼 때는 느리게 움직이고 가까이서 볼 때는 빠르게 움직이는 현상도 motion parallax로 인한 효과이다. 예를 들어, 차를 탈 때 가까이 있는 나무들보다 멀리 떨어진 나무들이 더 느리게 움직이는 경우를 볼 수 있다. 또한 차가 빠르게 움직일 때도 구름은 거의 움직이지 않는다는 것을 알 수 있다. 이는 모두 시차로 인한 효과이며 깊이(depth)를 판단하는데 중요한 요소가 된다. 가령, 사람은 두 눈 사이의 거리로 인해 서로 다른 상이 맺히는데 이를 양안 시차라 하고 겹치는 두 상을 통해 물체의 깊이를 감지할 수 있다. 이와 유사하게 스테레오 비전 시스템은 사물의 3D좌표를 삼각측량하기 위해 시차를 이용한다.

Parameter
---------------------------
머신러닝 알고리즘이 학습 과정(Training)을 통해서 업데이트하는 값들. 보통 \\(\theta)\\, \\(\pi)\\로 표기하거나 \\(W)\\와 같이 matrix의 형태로 표현하기도 한다. Neural Networks 구조를 이용할 경우 학습과정에서 업데이트되는 Weights, W와 Bias, b가 Parameter가 된다.

Perceptual Grouping
---------------------------
지각적 그룹화(Perceptual grouping)는 시각적 인지 과정에 있어 이미지의 특정 영역에 대해 물체나 패턴과 같은 고차원의 지각적인 개체(perceptual unit)로 묶는 일련의 과정을 말한다.

Perplexity
---------------------------
++Need to Fill++

Policy Gradient
---------------------------
++Need to Fill++

Pooling(Subsampling)
---------------------------
Convolutional Neural Networks(CNN)의 Pooling(Subsampling) Layer에서 차원 축소를 위해 수행하는 연산. 필터 사이즈 안에서 최댓값을 추출하는 Max Pooling, 평균값을 추출하는 Average Pooling, 최솟값을 추출하는 Min Pooling이 있다.

![Alt text](/img/glossary/pooling.jpg "Pooling")

Posterior
---------------------------
사후 확률(Posterior 또는 Posterior Probability)은 말 그대로 일 사(事) 뒤 후(後), 즉, 특정 사건 이후에 어떤 일이 일어날 확률을 말한다. 예를 들어, 한 학급에 남자와 여자가 각각 10명, 5명이 있다고 생각해보자. 여기서 남학생 중 키가 170 이상인 학생의 확률을 알 수 있다면 키가 170 이상인 학생 중 남자인 학생도 근사적으로 알 수 있다.

\\(P(성별=남자) = 10/15\\)
\\(P(성별=여자) = 5/15\\)
\\(P(키>170) = 5/15\\)
\\(P(키>170|성별=남자) = 4/10\\)

$$
P(성별=남자|키>170) = \frac{P(성별=남자, 키>170)}{P(키>170)} = \frac{P(키>170|성별=남자)P(성별=남자)}{P(키>170)}
$$

여기서 P(성별=남자|키>170)은 사후확률(posterior), P(성별=남자|키>170)은 우도(likelihood), P(성별=남자)는 사전확률(prior)이 된다. 베이지안 정리(Bayesian Theorem)에 따르면 사후확률은 사전확률과 우도로 근사할 수 있다. 사전확률의 반대 개념으로 사전 확률(Prior Probability)이 있다.


Precision
---------------------------
정확도(Precision)은 혼동행렬(Confusion Matrix)에서 찾은 것(TP, FP) 중에 올바르게 찾은 것(TP)의 비율이다. 예를 들어, A와 B라는 제품을 분류하는 기계가 있을 때 A로 분류한 것의 개수 중 A를 A로 올바르게 분류한 것()만을 포함한 비율을 말한다.

![Alt text](/img/glossary/precision.jpg "Precision")

Pretrained model
---------------------------
미리 학습이 끝내 파라미터가 최적화된 모델을 말한다. 모델에서 미리 학습된 파라미터를 신경망에 입력하는 경우도 있다. 반대로, 전이학습(Transfer Learning)을 통해 미리 학습된 모델(Pretrained model)을 불러들인 후 학습데이터에 맞게 fine tuning하여 사용하는 방법이 있다.

Prior
---------------------------
사전 확률(Prior 또는 Prior Probability)은 말 그대로 일 사(事) 앞 전(前), 즉, 특정 사건이 일어나기 전의 확률을 의미한다. 구체적으로 관측자가 어떠한 사건에 대해 관측을 하기 전에 시스템 또는 모델에 대해 가지고 있는 선험적 확률을 말한다. 예를 들어, 남녀의 구성비를 나타내는 P(성별=남자), P(성별=여자) 등이 사전확률에 해당한다.

---

Q
========

---

R
========

Random Initialization
---------------------------
초기 가중치(Initial weight)를 적절히 설정하는 것은, 손실함수(loss function)에서 최솟값(Global minimum)을 찾는데 매우 중요한 역할을 한다. 무작위 초기화(Random Initialization)는 초기 가중치를 임의의 0에 가까운 값으로 초기화한다.

R-CNN
---------------------------
++ Need to Fill ++

Recall
---------------------------
재현율(Recall)은 혼동행렬(Confusion Matrix)에서 찾아야 하는 것(TP, FN) 중에 올바르게 찾은 것(TP)의 비율이다. 예를 들어, A와 B라는 제품을 분류하는 기계가 있을 때 A제품 전체 중 A를 올바르게 분류한 것()만을 포함한 비율을 말한다.

![Alt text](/img/glossary/recall.jpg "Recall")

Receptive Field Size
---------------------------
CNN에서 Receptive field는 각 단계의 입력 이미지에 대해 하나의 필터가 커버할 수 있는 이미지 영역의 일부를 뜻한다. receptive field는 convolutional layer가 깊어질수록 선형적(linearly)으로 증가하고, atrous convolutions를 쌓을때는 기하급수적(exponentially)으로 증가한다. 아래의 그림에서 왼쪽 검붉은 영역이 receptive field이다. 그림에서 살펴볼 수 있듯이 receptive field는 layer를 거치게 되면서 채널(channel) 영역으로는 길어지지만, 공간적(spatial)으로는 작아짐을 알 수 있다. 그 다음 필터는 이 receptive field를 보게 되고, 단계를 거칠수록 각각의 필터가 볼 수 있는 영역(receptive field)을 확장시킴으로써 구조적으로 효율을 높인다.

![Alt text](/img/glossary/receptive_field_size.jpg "Receptive Field Size")

Regression
---------------------------
데이터로부터 continuous value(연속값)을 예측(Prediction)하는 문제. 예를 들어, 다년간의 집값의 변동추이를 가지고 다음 달의 집값은 얼마일지?, 몇 주간의 온도 데이터를 이용하여 내일의 온도는 몇 도일지? 등의 문제를 맞추는 것이 Regression(회귀) 문제이다.

Regularization
---------------------------
학습에서 발생하는 에러(training error)가 아닌, 모델의 성능 평가를 위한 테스트 상에서 발생하는 에러(generalization error)를 줄이기 위하여 학습 알고리즘을 수정하는 기법. 간단히 말해서, generalization을 개선하기 위한 방법이다. 일반화(Regularization)을 통해 학습의 방향이 error function/cost function 뿐만 아니라 weight의 값들 역시 최소가 되는 방향으로 진행된다. 이를 가중치 감쇠(weight decay)라고도 한다. 

ReLU
---------------------------
Rectified Linear Unit(ReLU)의 약자. Neural Networks의 Activation function 중 하나. 최근에 sigmoid activation function 대신 많이 사용된다.

![Alt text](/img/glossary/relu1.jpg "ReLU 1")

ReLU Activation function은 기존의 sigmoid activation function과 비교해서 다음의 두 가지 장점을 가진다.

1. 기존의 sigmoid activation function은 x의 값이 일정 수준 이상 커지거나 작아지면 기울기(gradient) 값이 0이 되어 layer를 깊게 쌓을 때 Vanishing Gradient Problem이 발생하였다. 이에 반해, ReLU activation function은 x가 0보다 크면 항상 1의 기울기(gradient)를 가지므로 Vanishing Gradient Problem이 발생할 가능성이 줄어든다.
2. ReLU activation function의 경우 x가 0보다 작으면 0의 기울기 값을 가지므로 Hidden unit들이 sparse하게 특징을 학습하도록 유도할 수 있다.

![Alt text](/img/glossary/relu2.jpg "ReLU 2")

ReLU Activation Function

Representation Learning
---------------------------
Representation Learning을 있는 그대로 받아 들여보자. 말 그대로 표현을 학습하는 것이다. 어떤 표현인가? 세상 모든 사물과 지식들을 어떤 공간에 mapping할 수 있다면, 또 그 사물과 지식들이 하나하나를 점이라고 가정한다면, 사물과 지식들을 표현하는 어떤 feature가 있을 것이고 의미론적으로 유사한 점들끼리는 뭉쳐질 것이다. 이렇게 뭉쳐진 점들 자체가 어떤 개념에 대해 대표성을 지니게 되고 이를 표현한다고 이야기할 수 있다. 그러니까 Representation Learning은 이러한 점들을 조금 더 밀도 높게 의미있는 것끼리 뭉쳐진 공간을 찾아준다. 따라서 Representation learning에서 중요한 것은 관측 가능한 것들에 대한 예측이 아니라, 겉으로 드러나지 않는 숨어있는 구조를 학습하는 것이다. 이렇게 잘 학습이 된 representation을 이용하면 classification 등의 task에서 훨씬 더 효율적으로 예측할 수 있게 된다.

Resampling
---------------------------
리샘플링(Resampling)은 모분포의 형태를 알 수 없을 때, 현재 갖고 있는 데이터의 일부분을 재추출하여 분포를 만든 후 관측하는 값의 통계적 의미를 확인하는 방법이다. 샘플링을 처음부터 다시 하는 것이 아닌, 이미 수집한 데이터로 다시 샘플링하는 방법을 일컫는다. 간단히 말하자면, 전체 훈련데이터(training set)에서 일부 샘플을 반복적으로 추출한 후, 이를 관측하여 추가적인 정보를 얻는 방법이다. 결과적으로 데이터 분포의 변화에 따른 모델의 변화를 관측하고 평가할 수 있게 된다.

Restricted Boltzmann Machine(RBM)
---------------------------
제한된 볼츠만 기계(Restricted Boltzmann Machine, RBM)는 인공신경망으로 해석될 수 있는 확률 그래프 모델 중 하나로, 비지도 학습(unsupervised learning) 방식을 따른다. 한 개의 RBM은 가시 레이어(visible layer)와 히든 레이어(hidden layer), 그리고 각 레이어 간 모든 뉴런들의 연결로 구성되어 있다. 경사하강법(gradient descent)에 대한 근사(approximation)인 Contrastive Divergence(CD)를 이용하여 RBM을 효율적으로 학습할 수 있다. 아래 그림에서 확인할 수 있듯이, RBM과 BM의 차이는 hidden-to-hidden / visible-to-visible layer의 연결(connection) 유무에 있다. 이 간단한 차이로 인해 RBM은 실제 구현이 가능하고, BM은 구현이 매우 어렵다. 

![Alt text](/img/glossary/restricted_boltzmann_machine.jpg "Restricted Boltzmann Machine(RBM)")

Ridge Regression
---------------------------
Ridge regression은 선형회귀의 방법 중 하나로, 기본적인 선형회귀와 다른 점은 모델 복잡도를 낮추기 위해 정규화 항이 추가되었다는 것이다. 트레이닝셋에 대해 과도하게 적합한것이 좋은 모델을 보증하지는 않기 때문에, 오히려 트레이닝셋에 과도하게 적합할 때 페널티를 주게 된다. Ridge regression에서는 계수의 제곱에 해당하는 페널티를 준다. L2 regularization을 사용하기 때문에 L2 regularizer이라고도 불리며, Weight decay등 다양한 명칭으로도 사용된다.

RMSProp
---------------------------
Adagrad는 아래로 볼록(convex)한 환경에서는 빠르게 수렴하지만, non-convex 환경에서는 학습률(learning rate)이 너무 작아져 극솟값(local minimum)에 갇혀버리는 한계를 보인다. 이를 극복하기 위해 제안된 방식이 RMSProp이다. 이는 Adagrad의 기울기 제곱 합(gradient accumulation) 방식 대신 지수적으로 감소하는 평균(exponentially decaying average)을 사용하여 학습률이 무한정 작아지지 않게 한다. 결과적으로 RMSProp은 AdaGrad보다 non-convex 환경에서 더 좋은 성능을 보인다.

RNN
---------------------------
![Alt text](/img/glossary/RNN.png)

RNN은 hidden layer의 output이 다시 hidden layer의 input으로 들어오는 순환구조를 가진 네트워크이다. 순차적인 정보에 대해서 과거의 정보까지도 기억할 수 있는 능력을 가지고 있기 때문에 문자, 음성신호 등 시계열 데이터 처리에 적합하다고 알려져있다. 위 그림에서 볼 수 있듯이 sequence의 길이에 관계없이 input과 output을 받아들일 수 있는 구조이다. 따라서 필요에 따라 다양하고 유연하게 구조를 만들 수 있다는 점이 RNN의 가장 큰 장점이다.

![Alt text](/img/glossary/RNN2.png)

Robust(강건)
---------------------------
Robust하다는 것은 어떠한 상황에 처하더라도 비슷한 성능을 발휘한다는 뜻이다. 다시 말하면, 시스템이 작동하는 외부환경이 변할 때 성능을 얼마나 잘 유지하는지를 나타낸다. 조명의 변화 또는 대상물을 찍는 거리나 각도가 변함에도 불구하고 성능이 그대로 유지되거나 적은 양만 저하되는 경우를 강건하다고 말한다. 가령, 사람의 시각은 외부 환경에 대해 매우 강건하다고 말할 수 있다.

---