---
layout: page
permalink: "glossary/itom"
title: Glossary
subtitle: I to M
show-avatar: true
comments: true
---

---


| [I](#i) | [J](#j) | [K](#k) |
|:-------:|:-------:|:-------:|
| **[L](#l)** | **[M](#m)** |

---


I
========

Image Fusion
---------------------------
++ Need to Fill ++

Image Registration(Alignment)
---------------------------
하나의 장면이나 대상을 다른 시간이나 관점에서 촬영할 경우, 영상은 서로 다른 좌표계에서 얻어지게 된다. 영상 정합(image registration)은 이와 같은 서로 다른 영상을 변형하여 하나의 좌표계에 나타내는 처리기법이다. 정합을 통해 서로 다른 측정 방식을 통해 얻은 영상이 어떻게 대응되는지를 알 수 있다. 영상 정합 알고리즘은 크게 intensity-based와 feature-based로 나뉜다. 고정된 영상을 target image라 하고, 맞추어질 영상을 source image라고 한다. 영상 정합은 source image를 공간적으로 변형해 target image에 맞추는 과정을 포함한다. intensity-based는 영상의 세기를 비교하는 방식이고, feature-based는 영상 속의 점, 선, 테두리 등을 찾아 서로 맞추는 방식이다. intensity-based는 그림을 통째로 비교해 정합하는 데 반해, feature-based는 둘 이상의 그림 속에서 여러 개의 특징을 찾아 비교한다. 두 영상 속에서 특징점 쌍의 개수가 해당 영상 변형에 필요한 최소 개수보다 많은 경우, RANSACE과 같은 방식으로 두 영상의 변환 관계를 계산할 수 있다. 영상 정합 알고리즘은 도메인에 따라 Spatial domain과 Frequency domain으로 나눌 수도 있다. Spatial domain 방식은 영상의 공간 속에서 그림의 픽셀 세기 패턴이나 특징을 맞추는 방식이다. Frequency domain 방식은 두 영상 간의 변형에 필요한 매개변수를 주파수 영역에서 직접 찾아내는 방식이다.

Inference
---------------------------
학습이 완료된 모델이 테스트 셋에 대하여 예측을 수행하는 과정을 추론(Inference)이라고 한다. 통계학에서는 특정 관찰 데이터에 맞게 분포의 매개변수를 조정하는 과정을 의미한다.

Interpolation
---------------------------
보간법(Interpolation)은 알려진 지점의 값 사이에 위치한 값을 알려진 값으로부터 추정하는 것을 말한다.

Iteration
---------------------------
iteration은 batch size만큼의 학습데이터가 알고리즘을 돈 횟수를 말한다. 신경망의 관점에서는 batch size의 학습데이터에 대해 순전파/역전파(forward/backward pass)를 한번 거치는 것을 1 iteration이라고 한다. 쉽게 말하면, pass(=forward pass+backward pass)의 횟수이다. 예를 들어, 1000개의 학습데이터가 있고, batch size는 500이라 하자. 1epoch를 마치는데 2 iteration을 거쳐야 한다. 간단히 생각하면, iteration = (전체데이터 수)/(batch size)가 된다.

---

J
========

---

K
========

K-means clustering
---------------------------
K-평균 클러스터링(K-means clustering)은 비지도학습(Unsupervised Learning) 알고리즘 중 간단하면서도 인기가 많은 알고리즘 중 하나이다. 이는 무작위로 선정된 중심(centroid)에서 부터 시작해, 중심의 위치를 반복적으로 수정하며 적합한 위치를 찾는다. 중심의 위치가 안정화되면(stabilize) 주어진 데이터는 k개의 클러스터(Cluster)로 묶이며, 각 클러스터와 거리 차이의 분산이 최소화된다. 이렇게 묶인 클러스터에 대해 라벨링(Labeling)을 할 수 있다.

K-Nearest Neighbor(KNN)
---------------------------
K-최근접 이웃(K-Nearest Neighbor)은 구현하기 쉬운 기계학습 알고리즘 중 하나이다. 모델을 통해 학습된 데이터는 어떤 특성(feature)에 따라 군집을 형성한다. 이후 범주를 알지 못하는 새로운 데이터가 들어왔을 때, 기존의 데이터가 이루고 있는 군집 중 어느 군집에 속하는지를 판단할 수 있다. 그 판단의 기준은 최근접(Nearest)이라는 말에서 찾을 수 있는데, 입력데이터와 가장 가까이 있는 군집으로 분류된다.

Knowledge Graph Embeddings
---------------------------
지식 그래프(Knowledge Graph)는 다양한 소스로부터 축적한 시맨틱 검색 정보를 사용하여 검색결과를 향상시키는 것으로 구글이 사용하는 지식 베이스이다. 즉, Knowledge Graph는 지식, 사물 등의 수많은 정보들을 각각 하나의 노드로 구성하고 그 관계를 그래프의 형태로 나타낸 것이다. Knowledge Graph Embedding은 Representation Learning의 한 방법으로써, Graph의 속성들을 유지한채로 vector space상에 mapping하는 것을 목적으로 한다.

---

L
========

Label
---------------------------
지도 학습(Supervised Learning)에서 학습데이터와 함께 짝지어지는 '답'을 의미한다. 이미지 학습데이터에 대해서는 라벨(Label)이 그라운드 트루스(ground truth)가 된다. 가령, 주택 데이터에 대한 특성(feature)이 침실 수, 화장실 수, 주택의 연령일 때, 라벨(label)은 주택의 가격일 수 있다. 스팸 메일 감지 데이터의 경우 특성은 제목, 보낸 사람, 이메일 메시지 자체일 수 있고 라벨은 '스팸' 또는 '스팸 아님'으로 지정할 수 있다.

LASSO Regression
---------------------------
LASSO(Least Absolute Shrinkage Selector Operator)는 중요한 몇 개의 변수만 선택하고 다른 계수들은 0으로 줄인다. 이 특징은 feature selection으로 알려져있고 이것이 ridge regression과 다른 점이다. L1 regularization을 사용하기 때문에 L1 regularizer이라고도 불린다.

Layer
---------------------------
신경망(Neural Network)에서 입력을 처리하거나 출력을 내보내는 뉴런 집합이다. 흔히 층이라고도 표현하는데, 일반적으로 층이 깊어질수록(Deep) 네트워크가 표현할 수 있는 정보의 양이 풍부해진다.

Learning rate
---------------------------
학습률(Learning rate) 또는 학습속도라고도 한다. 보폭(step size)과도 같은 의미를 지니나, 크기보다 속도적인 관점에서 표현할 때 learning rate라고 한다. 아래 그림에서는 학습 과정에서 학습률(learning rate)의 중요성을 확인할 수 있다. 높은 학습률(high learning rate)은 손실함수(loss function)의 지수적인 감소(exponential decay)를 보이는 반면, 낮은 학습률(low learning rate)은 선형적인 감소(linear decay)를 보인다. 빠르게 손실값을 찾아가는 높은 학습률이 더 좋아 보일수도 있지만, 간혹 더 나쁜 손실값에 갇힐 수도 있다.

![Alt text](/img/glossary/learning_rate.jpg "Learning Rate")

Likelihood
---------------------------
우도 또는 가능도(Likelihood)는 확률분포의 파라미터가 어떤 확률변수의 샘플링값과 일관되는 정도를 나타낸다. 확률변수 \\(X\\)가 파라미터 \\(\theta)\\에 대해 확률분포 \\(P_{\theta}(X))\\를 가지며 \\(X\\)가 x로 샘플링되었을 때, \\(\theta)\\의 Likelihood는 다음과 같이 정의된다.

\\(L(\theta|x) = P(X=x|\theta))\\

이러한 Likelihood의 개념은 베이즈 정리에서 사후확률을 계산하기 위해 이용된다.

Linear Regression(선형 회귀)
---------------------------
선형 함수를 이용해서 데이터를 Regression하는 기법으로, 가장 기본적인 머신러닝 기법 중 하나이다. 간단하게 생각하보자. 아래의 그림과 같이 2차원 좌표 상에 흩뿌려진 데이터점이 있을 때, 이 데이터의 분포가 선형적이라고 판단할 수 있는 경우에 선형 함수를 통해 근사적으로 예측할 수 있다. 하지만 만약 데이터가 선형적으로(Linearly) 분포하지 않을 경우, 예측률이 떨어지는 단점이 있다.

![Alt text](/img/glossary/linear_regression.jpg "Linear Regression")

Localization
---------------------------
++ Need to Fill ++
   
Logistic Regression
---------------------------
선형 예측에 로지스틱(Logistic) 또는 시그모이드(Sigmoid) 함수를 적용하여 불연속값(discrete value)에 대한 확률을 생성하는 일종의 분류(Classfication) 기법이다. 로지스틱 회귀(Logistic Regression)는 주로 이진 분류(Binary Classification) 문제에 사용된다.

Loss Function
---------------------------
손실함수(Loss function)는 주로 데이터점수(data point), 예측(prediction), 라벨(label)에 대해서 정의되며 오차와 같은 패널티(penalty)를 계산하는 함수로써 이해된다. 비용함수와 종종 비교되지만, 엄밀히 말하자면 손실함수가 조금 더 좁은(fine) 개념이다. 쉽게 말하자면, 단일 학습 데이터(single training example)는 손실함수, 전체 학습 데이터(entire training example)는 비용함수로 이해해도 무방하다.

LSTM
---------------------------
LSTM은 RNN의 vanishing gradient(관련 정보와 그 정보를 사용하는 지점 사이 거리가 멀 경우 역전파시 그래디언트가 점차 줄어 학습능력이 크게 저하되는 것)을 해결하기 위해 고안되었다. 기존의 RNN에서 받는 hidden state에 cell state가 추가된 형태로 내부는 forget, input, output gate로 구성되어 있다. forget gate는 과거의 정보를 얼마만큼 기억할것인지(지울것인지를), input gate는 현재의 정보를 얼마만큼 기억할것인지를 결정하며, output gate는 이 둘을 조합하여 내보낸다.

![LSTM](/img/glossary/LSTM.png)

---

M
========

Markov Chain
---------------------------
++Need to Fill++

Maxinum A Posterior(MAP)
---------------------------
한 학급에 남자와 여자가 각각 10명, 5명이 있다고 생각해보자. 여기서 남학생 중 키가 170 이상인 학생의 확률과 키가 170 이상인 학생 중 남학생일 확률 두 가지를 생각할 수 있는데, 둘 중 하나만 알면 반대의 경우는 근사적으로 알 수 있다. 여기서 이미 주어진 남녀의 비율은 prior, 알 수 있는것은 likelihood, 알고 싶은 것은 posterior이 된다. 아래의 경우에서는 남학생 중 키가 170 이상인 학생의 확률 P(키>170|성별=남자)를 알 수 있다고 가정하자.

\\(P(성별=남자) = 10/15\\)
\\(P(성별=여자) = 5/15\\)
\\(P(키>170) = 5/15\\)
\\(P(키>170|성별=남자) = 4/10\\)
\\(P(키>170|성별=여자) = 1/5\\)

$$
P(성별=남자|키>170) = \frac{P(성별=남자, 키>170)}{P(키>170)} = \frac{P(키>170|성별=남자)P(성별=남자)}{P(키>170)}
$$

키가 170 이상인 확률을 알고 싶을 때, MAP에서는 사후확률을 비교한다. 가령, 키가 170 이상인 학생을 보았는데 그 학생이 남학생일 확률 P(성별=남자|키>170)과 여학생일 확률 P(성별=여자|키>170)을 비교해서 더 큰 값을 선택한다. MLE는 단순히 남자와 여자 중 키가 170 이상인 학생의 확률을 따지지만, MAP는 키가 170 이상인 학생의 성비까지 고려한 확률을 이용한다. MAP와 MLE의 가장 큰 차이점은 prior를 곱한다는 것이기 때문에 만약 P(성별)이 uniform distribution이라면 MLE와 같은 계산을 하게 된다. 결국 예시에서 MAP에 중요한것은 전체 학급 인원 중 남자와 여자의 비율(prior)이다. 수식으로는 다음과 같이 표현된다.

\\(P(p|D) \propto P(D|p)P(p)\\)
\\(\hat{p} = argmax_p {P(p|D)}\\)

Maximum Likelihood Estimation(MLE)
----------------------------------
우도 또는 가능도(Likelihood)가 최대가 되는 파라미터들을 찾는 문제이다.

![Alt text](/img/glossary/maximum_likelihood_estimation.jpg "Maximum Likelihood Estimation")

예를 들어, 한 학급에 남자와 여자가 각각 10명, 5명이 있다고 생각해보자. 여기서 남학생 중 키가 170 이상인 학생의 확률과 키가 170 이상인 학생 중 남학생일 확률 두 가지를 생각할 수 있는데, 둘 중 하나만 알면 반대의 경우는 근사적으로 알 수 있다. 여기서 이미 주어진 남녀의 비율은 prior, 알 수 있는것은 likelihood, 알고 싶은 것은 posterior이 된다. 아래의 경우에서는 남학생 중 키가 170 이상인 학생의 확률 P(키>170|성별=남자)를 알 수 있다고 가정하자.

\\(P(성별=남자) = 10/15\\)
\\(P(성별=여자) = 5/15\\)
\\(P(키>170) = 5/15\\)
\\(P(키>170|성별=남자) = 4/10\\)
\\(P(키>170|성별=여자) = 1/5\\)

$$
P(성별=남자|키>170) = \frac{P(성별=남자, 키>170)}{P(키>170)} = \frac{P(키>170|성별=남자)P(성별=남자)}{P(키>170)}
$$

키가 170 이상일 확률을 알고 싶을 때, MLE에서는 P(키>170|성별=남자)와 P(키>170|성별=여자)의 두 likelihood를 비교하여 더 큰 것을 선택한다. 가령, 남자는 0.4, 여자는 0.2의 확률이므로 키가 170 이상일 확률은 0.4라고 정하는 방법이 MLE이다. 수식으로는 다음과 같이 표현된다. 오른쪽과 같이 log를 씌웠을 때는 Maximum Log Likelihood Estimation이라고 한다.

\\(argmax_p {P(D|p)} = argmax_p {log P(D|P)}\\)


Mean Squared Error(MSE)
---------------------------
평균 제곱 오차. 대표적인 Cost Function 중 하나이다. 모델의 예측값(Prediction), 과 실제 타겟값(True target value), 과의 차이를 제곱해서 모두 더한 값들의 평균으로 정의된다. 모델의 성능을 측정(Measure)하는 지표로서 활용된다. 즉, MSE가 작을수록 더 좋은 모델임을 알 수 있다.

![Alt text](/img/glossary/mean_squared_error.jpg "Mean Squared Error(MSE)")

Median Filter
---------------------------
중간값 필터(Median Filter)는 이미지나 신호로부터 노이즈를 제거하는 데 주로 이용되며, 영상처리에서는 일반적으로 전처리 단계에서 사용된다. 가령, edge detection을 수행하기 전에 이미지의 노이즈를 제거하는 방식이다. 특히, Salt&Pepper 노이즈 제거에도 뛰어나고 edge blurring이 덜하기 때문에 유용하게 사용된다. 예를 들어 filter size가 3x3이라고 할 때, 인접한 9개의 pixel들을 정렬하여 중간값을 취하는 방식이다.

Metric
---------------------------
Metric은 어떠한 지표나 척도를 말하는데, 학습을 통해 목표를 얼마나 잘 달성했는지를 나타내거나(즉, 최적화를 해야하는 대상) 그 자체로써 유의미한 수치를 지닌다. 가령, 두 지점 사이의 거리를 나타내는 distance metric에는 Euclidean, Mahalanobis, Manhattan 등이 있는데 같은 두 점이라도 어떤 metric을 사용하느냐에 따라 그 거리는 다르게 표현된다. 마찬가지로 어떤 metric을 사용하느냐에 따라 모델의 성능은 다르게 표현될 수 있다.

Metric Learning
---------------------------
우리는 두 점 사이의 거리를 나타낸다고 할 때 상황에 따라 Euclidean, Mahalanobis 등의 다양한 distance metric를 적용할 수 있다. 그런데 여기서 어떤 metric을 사용하느냐에 따라 모델의 성능에 영향을 줄 수 있는데, 이 metric들은 근본적으로 두 점 사이의 관계만을 표현할 수 있기 때문에 실제 데이터 간의 관계를 표현하기에는 적합하지 않다. Metric Learning은 이러한 distance metric 자체를 새롭게 정의하자는데서 출발한다. vetor space 상에 흩어진 수많은 점들 중 의미론적으로 유사한 점들끼리는 뭉치게, 그렇지 않은것들 끼리는 멀어지도록 metric을 학습한다. 이런 방식으로 데이터의 정형성에 관계 없이 feature들간의 관계를 통해 상황에 적합한 metric을 도출할 수 있게 된다.

Mini-batch
---------------------------
업데이트(Update)를 할 때, 미니배치(mini-batch) 방식은 전체 데이터셋을 한꺼번에 사용하지 않고 조금씩 쪼개어 사용하는 개념이다. 단, mini-batch 집합의 선정은 가급적이면 상호연관성(correlation)이 적어 전체 집합을 대표하는 것을 보장해야 한다. 다시 말해, 전체 데이터의 스펙트럼 중 일부분에 몰려있는 데이터를 사용하게 된다면 대표성을 보장할 수 없어, 고르게 퍼져있는 데이터를 선정해야 한다는 뜻이다. 
 
MNIST
---------------------------
머신러닝을 공부하는 사람들이 가장 먼저 접하게 되는 데이터셋. 머신 러닝 분야의 “Hello World”라고 볼 수 있다. 60,000장의 트레이닝 데이터와 10,000장의 테스트 데이터로 정제되어 있고 0~9사이의 28×28 크기의 필기체 이미지로 구성되어 있다. http://yann.lecun.com/exdb/mnist/ 에서 다운로드 받을 수 있다.

![Alt text](/img/glossary/mnist.jpg "MNIST")

Momentum
---------------------------
모멘텀(Momentum)은 경사하강(Gradient Descent)을 통해 최적값을 찾아갈 때 파라미터 벡터(Parameter Vector)의 속도에 일종의 관성을 주는 방식을 말한다. 이는 최적화 문제(optimization problem)를 물리학적 관점에서 바라보는 데서 출발한다. 최적화(Optimization)를 할 때 parameter vector가 업데이트 되는 것을, 언덕에서 물체를 굴리는 것에 비유한다면 아래와 같이 해석할 수 있다.
1. 포텐셜 에너지(Potential Energy, U=mgh) = 손실함수(loss function)
2. 물체에 속도를 주지 않은 채 언덕 위에 가만히 두는 것 = 파라미터의 초기값(Initial Value) 설정
3. 물체에 가해지는 힘은 potential energy의 Gradient()와 크기가 같다 = 파라미터 벡터에 가해지는 힘은 loss function의 Gradient와 크기가 같다.
물리학적 관점에서, Momentum update는 Gradient가 오직 속도(velocity)에만 직접적으로 영향을 주고, 속도가 위치값(position)에 영향을 준다. Momentum update를 사용하면, Parameter Vector가 업데이트되는 방향과는 별개로, 이전에 이동했던 방식을 기억하면서 그 방향으로 관성을 주며 이동하게 된다.

Multi-Scale image
---------------------------
우리는 보통 어떤 물체에 대해서 특정영역의 수치로써 표현하곤 한다. 가령, 나무에서 가지의 길이는 cm에서 m까지로, nm, km의 단위로 논할 필요가 없는 것이다. 이는 오히려 잎사귀를 구성하는 분자, 나무가 자라는 숲의 단위에 가깝다. 즉, 수치는 물체를 설명하는 다양한 방식이 될 수 있다. 이러한 개념은 지도를 만들 때, 축척의 개념에서 자주 사용된다. 실세계에서 정보를 추출하고 자동으로 분석하는 방법을 디자인할 때 multi-scale 표현법이 필요하다.

---