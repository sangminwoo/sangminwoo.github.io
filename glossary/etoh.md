---
layout: page
permalink: "glossary/etoh"
title: Glossary
subtitle: E to H
show-avatar: true
comments: true
---

# Contents

| [E](#e) | [F](#f) | [G](#g) | [H](#h) |
|:-------:|:-------:|:-------:|:-------:|

E
=========

Embeddings
---------------------------
임베딩(embeddings)은 이산값(discrete value)의 고차원 벡터에서 연속 값(continuous value)을 가지는 저차원 벡터로 매핑(mapping)시켜주는 것을 말한다. 가령, 한 문단에서 등장하는 영단어를 1, 등장하지 않는 영단어를 0이라고 하자. 수백만 개의 영단어 중 한 문단에 사용되는 단어는 대개 50개 이하이기 때문에 몇 개를 제외한 대부분의 영단어는 0으로 표기될 것이다. 이를 수백만 개의 정수를 갖는 희소 벡터(sparse vector) 또는 one-hot vector에서 수백 개의 0~1 사이의 부동 소수점을 갖는 밀집 벡터(dense vector)로 표현할 수 있다.

Ensemble Learning
---------------------------
앙상블 러닝(Ensemble Learning)은 여러 악기가 모여 합주를 하듯이, 여러 분류기(weak classifier)를 병합하여 더 좋은 분류 성능을 내는 기법이다. 따라서 연산량이 증가하는 문제가 있지만 ILSVRC와 같이 극도로 성능을 이끌어내야 하는 대회 같은 상황에서는 거의 필수적으로 사용된다. 여러 분류기의 결과를 종합하는 데는 보통 다수결 투표(Majority voting)를 사용한다. 예를 들어 “고양이”와 “강아지”를 분류하는 문제를 5개의 분류기를 통해 Ensemble Learning하는 상황에서, 분류기 1이 “고양이”, 분류기 2가 “고양이”, 분류기 3이 “고양이”, 분류기 4가 “강아지”, 분류기 5가 “강아지”라고 예측했다면, 다수결의 원칙에 의해서 “고양이”가 옳은 예측(Prediction)이라고 결정하는 것이다. 이 과정을 그림으로 나타내면 아래와 같다. (아래 그림처럼 서로 다른 종류의 Machine Learning 알고리즘끼리도 결합할 수 있다.)

![Alt text](/img/glossary/ensemble_learning.jpg "Ensemble Learning")

Epoch
---------------------------
알고리즘이 전체 학습데이터를 한 번 봤	을 때 1 세대(epoch)라고 표현한다. 신경망의 관점에서는 모든 학습데이터에 대해서 한번의 forward pass와 한번의 backward pass를 거쳤을 때 1 epoch가 된다. 예를 들어, 1000개의 학습데이터가 있고, batch size는 500이라 하자. 1epoch를 마치는데 2 iteration을 거쳐야 한다.

Exploding Gradient Problem
---------------------------
Gradient 계산을 보면, 자코비안 행렬 안의 값들이 크다면 activation 함수와 네트워크 파라미터 값에 따라 gradient가 사라지는게 아니라 지수 함수로 증가하는 경우도 충분히 상상해볼 수 있다. 이 문제 역시 exploding gradient 문제 로 잘 알려져 있다. Vanishing gradient 문제가 더 많은 관심을 받은 이유는 두 가지인데, 하나는 exploding gradient 문제는 쉽게 알아차릴 수 있다는 점이다. Gradient 값들이 NaN (not a number)이 될 것이고 프로그램이 죽을 것이기 때문이다. 두 번째는, gradient 값이 너무 크다면 미리 정해준 적당한 값으로 잘라버리는 방법 (이 논문에서 다뤄졌다)이 매우 쉽고 효율적으로 이 문제를 해결하기 때문이다. Vanishing gradient 문제는 언제 발생하는지 바로 확인하기가 힘들고 간단한 해결법이 없기 때문에 더 큰 문제였다.

---

F
==========

Filter
---------------------------
필터(Filter)는 커널(Kernel)이라고도 한다. CNN에서는 일반적으로 지도학습(supervised learning)의 방법을 사용하는데, 이는 라벨링된 이미지(labelled images)를 통해 CNN을 학습시켜야 함을 의미한다. CNN은 학습(training)을 통해 convolution filter의 weight를 최적화(optimize)하고 error를 최소화하는 filter의 모양을 스스로 형성한다. filter의 크기를 설정하는 것은 학습에 있어 매우 중요한데, 이는 앞단(입력 이미지)을 처리할 때 filter가 유의미한 특징(feature)을 추출할 수 있어야하기 때문이다.

F-measure /  F1 score
---------------------------
F측정(F-measure)은 정확도(Precision)와 재현율(Recall)을 결합하여 하나의 값으로 표현하는 지표이다. 아래의 식에서 는 Precision과 Recall 중 어느 것에 비중을 둘지 결정한다. 예를 들어, 로 하면  측정이 되는데, Precision보다 Recall에 더 큰 비중을 두는 셈이다. F-measure에서 일반적으로 가장 많이 사용되는 지표는 로, Precision과 Recall을 같은 비중으로 본다.

![Alt text](/img/glossary/f-measure(f1_score).jpg "F-measure / F1 score")
	
Fully Connected Layer
---------------------------
전연결층 또는 완전 연결 레이어(Fully Connected Layer)를 다른 말로 밀집 레이어(Dense Layer)라고도 한다. 각 노드가 후속 히든 레이어(Hidden Layer)의 모든 노드에 연결되어 있어 Fully Connected라고 부른다.

---

G
=========

Generalization
---------------------------
학습에서 발생하는 에러가 아니라 모델의 성능 평가를 위한 테스트 상에서 발생하는 에러를 Generalization error라 한다. 모델의 성능을 테스트 할 때, training data와는 별개로 training에 사용되지 않은 데이터(unseen data)를 활용하여 평가하는데, training에 사용된 데이터와 test에 사용된 데이터는 서로 교점이 되는 데이터들이 없기 때문에 test를 Generalization이라 하고 test error를 generalization error라고 표현한다. 모델의 복잡도(Complexity)와 데이터를 표현하는 정보의 규모가 서로 매칭되지 않을 때 과적합/과소적합(Overfitting/ Underfitting)이  발생하고, 이를 Bad generalization이라고 한다.

Generative Model
---------------------------
생성모델(Generative Model)은 이미지와 같은 학습 데이터를 디지털 에센스(digital essence)로 압축(200GB의 이미지를 100MB의 가중치(weight)로 줄일 수 있다.)한다. 이를 통해 데이터의 고유한 특징(distinctive features)을 자연스럽게 인식하며, 신경망에서 실제 데이터에 대한 축소된 이해(reduced understanding)를 바탕으로 실제 데이터와 유사(similar)하거나 구별할 수 없는(indistinguishable) 데이터를 만들어낸다. 주로 비지도 학습(Unsupervised Learning)에 사용되며, 학습을 하면 할수록 더 현실적인 이미지를 만들어낼 수 있다. 생성모델의 예로는 유사한 이미지를 생성하기 위해 실제 이미지셋에 대해 훈련된 모델을 들 수 있다.

Generative Adversarial Networks(GAN)
------------------------------------
기본적인 아키텍쳐는 Discriminator와 Generator로 구성된다. 이는 경찰과 위조지폐 생성범의 관계로 비유할 수 있는데, Discriminator은 어떤 이미지에 대해 진짜 이미지인지 가짜 이미지(Generator에 의해 생성된)인지를 구분하도록 학습한다. Generator은 latent variable (noise distribution에서 추출한 값)로 부터 생성하는 이미지가 Discriminator를 잘 속일 수 있도록 학습된다. 결과적으로 Generator은 실제 데이터의 distribution을 거의 정확하게 근사할 수 있게 되고, Discriminator은 50% 확률로 진짜 이미지와 가짜 이미지(Generator에 의해 생성된)를 구분하는 균형점에 도달하게 된다. Generator이 학습하는 것이 무엇인지는 알 수 없지만 Target에 대한 일종의 representation을 학습하는 것으로 이해할 수 있다. 이렇게 학습된 Generator을 이용하면 새로운 이미지를 생성할 수 있기 때문에 이러한 모델을 Generative Model이라고 하고, 일련의 학습 과정을 Adversarial Learning이라 한다. 물론 이미지 뿐만이 아니라 텍스트, 음성 등에도 적용이 가능하다.

![Alt text](/img/glossary/generative_adversarial_networks.jpg "Generative Adversarial Networks(GAN)")

Generative Adverarial Networks(GAN)의 Architecture

Gradient Descent
---------------------------
경사하강법(Gradient Descent)는 학습 데이터의 조건에 따른 모델의 파라미터(parameter)를 기준으로 손실 함수(loss function)의 기울기(gradient)를 계산하여 손실을 최소화하는 방법을 말한다. 쉽게 말하자면, 이는 파라미터를 반복적으로 업데이트하면서 손실을 최소화하는 가중치(weight)와 편향(bias)의 가장 적절한 조합을 점진적으로 찾는 방식이다.

Graph cut
---------------------------
Image segmentation, Denoising 등 energy minimization과 관련한 Computer Vision task에 많이 활용되었던 알고리즘이다. Energy minimization은 그래프에서 Maximum flow를 찾는 문제로 치환되는데 이를 max-flow min-cut 최적화 문제라고 한다. 예를 들어, 그래프의 각 node를 픽셀이라고 생각하고 edge의 가중치를 픽셀 사이의 유사도라고 가정할 때, 최소 비용으로 절단하는 방법을 찾는 문제인 것이다. 그렇게 찾은 절단 방법이 가장 좋은 image segmentation 방법이 된다.

Graphical model
---------------------------
++Need to Fill++

Grid Search
---------------------------
하이퍼파라미터(Hyperparameter)를 Tuning하기 위한(최적조합을 찾기 위한) 기법으로, 일종의 Brute-force 알고리즘이다. 예를 들어, Regularization weight, 의 최적값을 찾고 싶다면, 일정한 후보값을 인간이 미리 선정하고 (e.g.  = {0.1, 0.3, 0.5, 0.8}) 해당 후보값으로 학습을 진행해보고 validation data set에 대해 가장 좋은 값이 나온 hyperparameter(e.g. =0.3)를 선택한다. 단점은 Brute-force 알고리즘이기 때문에 Tuning해야할 hyperparameter의 개수가 늘어남에 따라 연산량이 과도하게 증가하는 문제가 있다.

GRU(Gated Recurrent Unit)
---------------------------
LSTM의 long-term dependency 문제를 해결하면서, hidden state를 업데이트하는 계산을 줄였기 때문에 학습속도가 빨라졌다. LSTM에서는 forget, input, output gate가 있는 반면, GRU에서는 update, reset gate만 있고 output gate가 존재하지 않는다. update gate는 이전 메모리를 얼마나 유지할 것인지를 결정하고, reset gate는 새로운 입력을 이전 메모리와 어떻게 조합하는지를 결정한다. 즉, GRU는 LSTM의 간소화된 버젼임에도 불구하고 비슷한 성능을 보인다고 한다.

![GRU](/img/glossary/GRU.png)

---

H
=========

He et al Initialization
---------------------------
Kaiming He 등(He et al)이 제안한 이 초기화(Initialization) 방법은, Xavier Initialization과 유사하며 계수(factor)에 2를 곱하였다. 가중치(weight)는 이전 레이어(previous layer)의 크기에 따라 무작위로 초기화되며, 손실함수(loss function)의 최솟값(Global Minimum)을 더 빠르고 더 효율적으로 찾을 수 있다. 이는 제어된 초기화를 통해 더 빠르고 효율적인 경사하강(gradient descent)을 제공한다.

Heuristic
---------------------------
휴리스틱(Heuristic)은 “to discover”이라는 의미를 가진다. 즉 이미 정립된 공식에 의해서가 아니라, 정보가 완전하지 않은 상황에서 시행착오(trial and error) 혹은 주먹구구식의 규칙(Rule of Thumb)을 통해 지식을 알게 되는 과정을 의미한다. 잘 추측하는 기술(art of good guessing) 이라고 표현하기도 한다. 이러한 면에서 Heuristic은 알고리즘(Algorithm)과 대비되는 개념이다. Heuristic은 해결책의 발견을 보장하지는 않지만 많은 쓸모없는 대안들을 직접 시도해보지 않고도 배제할 수 있기 때문에 알고리즘보다 효율적이라고 본다. Heuristic 방식은 이상적이지는 않지만 적절한 방법을 찾을 때까지 다양한 방법을 적용해 보는 방식을 말한다.

Hidden Layer
---------------------------
히든 레이어(Hidden Layer)는 비지블 레이어(Visible Layer)와 반대되는 개념으로, 신경망(Neural Network)에서 입력 레이어(특성)와 출력 레이어(예측) 사이에 위치하는 합성 레이어를 말한다. 일반적으로 신경망에는 하나 이상의 히든 레이어가 포함된다.

HOG(Histogram of Oriented Gradient)
-----------------------------------
HOG(Histogram of Oriented Gradient)는 이미지의 특성을 검출하는 알고리즘 중 하나로, 대상 영역을 일정 크기의 셀로 분할하여 각 셀마다 edge 픽셀(gradient magnitude가 일정 값 이상인 픽셀)들의 방향에 대한 히스토그램을 구한 후 bin 값들을 일렬로 연결한 벡터이다. 즉, HOG는 edge의 방향 히스토그램 템플릿으로 볼 수 있다. 히스토그램 매칭은 대상의 형태가 변해도 매칭을 할 수 있지만 대상의 기하학적 정보를 잃어버리고 단지 분포(구성비) 정보만을 기억하기 때문에 잘못된 대상과도 매칭이 되는 문제가 있다. HOG는 템플릿 매칭과 히스토그램 매칭의 중간 단계에 있는 매칭 방법으로 볼 수 있으며 블록 단위로는 기하학적 정보를 유지하되, 각 블록 내부에서는 히스토그램을 사용함으로써 로컬한 변화에는 어느 정도 강인한(Robust) 특성을 가지고 있다. HOG는 일종의 템플릿 매칭이기 때문에 물체가 회전된 경우나 형태변화가 심한 경우에는 검출이 힘들기 때문에 형태변화가 심하지 않고 내부 패턴이 단순하며 물체의 윤곽선으로 물체를 식별할 수 있을 경우에 적합하다.

![Alt text](/img/glossary/histogram_of_oriented_gradient.jpg "Histogram of Oriented Gradient(HOG)")

Hyperparameter
---------------------------
머신러닝 알고리즘의 학습(Training)을 진행하기 전에 사람이 직접 손으로 지정해주어야만 하는 값들을 의미한다. 예를 들어, Gradient Descent 알고리즘의 경우 Learning rate, 와 Regularization을 Cost function에 추가할 경우 Regularization weight,  등이 초매개변수(hyperparameter)에 해당된다.  적절한 hyperparameter값은 머신 러닝 알고리즘의 학습을 진행하기 전에 사람이 직접 지정해주어야 하는 것에 반해, parameter는 학습 과정에서 머신 러닝 알고리즘이 적절한 값을 자동으로 찾아낸다.

---