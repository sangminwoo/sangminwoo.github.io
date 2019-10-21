---
layout: page
permalink: "glossary/stoz"
title: Glossary
subtitle: S to Z
show-avatar: true
comments: true
---

---


| [S](#s) | [T](#t) | [U](#u) | [V](#v) |
|:-------:|:-------:|:-------:|:-------:|
| **[W](#w)** | **[X](#x)** | **[V](#v)** | **[Z](#z)** |

---


S
=======

Saddle Point
---------------------------
안장점(Saddle Point)는 어느 방향에서 보면 극댓값(Local Maxima)이지만 다른 방향에서 보면 극솟값(Local Minima)이 되는 점이다. 이차원의 시각에서 보았을 때, 어느 방향에서는 아래로 굽어있지만 다른 방향에서는 위로 굽어있는 모양이 안장과 닮았다고 하여 붙여진 이름이다. 등고선(Contour)의 관점에서 Saddle Point는 두 등고선의 교차점으로 나타난다.

![Alt text](/img/glossary/saddle_point.jpg "Saddle Point")

Self-critic
---------------------------
++Need to Fill++

Semantic Segmentation
---------------------------
의미론적 분할(Semantic Segmentation)은 단순히 주어진 이미지를 분류하는 것에 그치지 않고, 장면에 대한 완전한 이해를 통해 픽셀단위의 분류를 해야 하는 고차원의 문제이다. Semantic segmentation을 위한 과정은 큰 덩어리에서 시작해서 촘촘하게(coarse-to-fine) 진행하는 방법으로 이해할 수 있다. 입력 이미지에 대해서 rough한 분류(Classification)를 먼저 진행하고, 객체의 위치를 표시(localization)/탐지(detection)한다. 마지막으로, 분할 과정에서는 모든 픽셀에 대해 객체 혹은 영역 단위의 클래스로 라벨링(labeling)한다.

Session
---------------------------
세션(Session)은 컴퓨터 공학에서 광범위하게 사용되는 용어 중 하나이다. 보통은 “웹서버가 클라이언트와 정보를 교환하는 통신을 주고받는 기간”을 의미한다. 예를 들어, 웹사이트에서 사용자가 로그인을 하게 되면 웹서버는 세션을 열어서 로그인한 사용자 정보를 저장하고 있다가 사용자가 로그아웃하면 웹서버는 저장하고 있던 사용자에 대한 정보를 삭제하게 된다. 텐서플로우(Tensorflow)에서도 세션, tf.Session()을 열면 그래프 상에서 텐서를 주고받게 되고 이에 대한 정보를 저장하고 있다가, 세션을 종료하면 저장하고 있던 정보를 삭제한다. 세션을 열기 전에는 그래프 형태만 정의된 상태이므로 실제 값을 주고받을 수 없다. 즉, 그래프 상의 노드들을 실제로 실행해서 값을 할당하려면 Session.run()을 실행해야만 한다.

Seq2Seq(Sequence-to-Sequence)
---------------------------
Seq2Seq는 입력 Sequence로부터 다른 도메인의 Sequence를 출력하는 Encoder-Decoder 구조의 모델이다. Encoder는 입력 문장의 모든 단어들을 순차적으로 입력받은 뒤에 마지막에 이 모든 단어 정보들을 압축해서 하나의 벡터로 만드는데, 이를 컨텍스트 벡터(context vector)라고 한다. 입력 문장의 정보가 하나의 컨텍스트 벡터로 모두 압축되면 이를 디코더로 전송하고, 디코더는 컨텍스트 벡터를 받아서 번역된 단어를 한 개씩 순차적으로 출력하는 방식이다. 예를 들어, 챗봇과 기계 번역이 seq2seq를 사용하는 대표적인 예인데, 입력 Sequence와 출력 Sequence를 각각 질문과 대답으로 구성하면 챗봇으로 만들 수 있고, 입력 Sequence와 출력 Sequence를 각각 source 문장과 target 문장으로 만들면 번역기가 된다. 이외에도 Image Captioning, Text Summarization, Speech to Text 등에서 다양하게 쓰일 수 있다.

![Seq2Seq](/img/glossary/Seq2Seq.png)

SIFT(Scale Invariant Feature Transform)
---------------------------------------
SIFT는 이미지의 특성을 검출하는 알고리즘(feature detection algorithm) 중 하나로, 이미지와 모델의 특징점 대 특징점으로 매칭을 하기 때문에, 대상의 크기, 형태, 방향(회전) 변화에 강인(Robust)하다는 장점이 있다. 이미지에서 특징점들을 선택하고 각 특징점을 중심으로 한 로컬 패치(local patch)에 대해 아래 그림과 같이 특징 벡터를 추출한다. 이 특징벡터는 영상패치를 4 x 4 블록으로 나누고 각 블록에 속한 픽셀들의 gradient 방향과 크기에 대한 히스토그램을 구한 후, 이 히스토그램 bin 값들을 일렬로 연결한 128차원 벡터이다. 이러한 특성에 비추어 보았을 때, SIFT는 액자 그림과 같이 내부 패턴이 복잡하여 특징점이 풍부한 경우에 적합한 방법이다.

![Alt text](/img/glossary/scale_invariant_feature_transform.jpg "SIFT(Scale Invariant Feature Transform)")

Sigmoid Function
---------------------------
Neural Networks의 Activation function 중 하나. 0~1 사이의 출력값을 갖는다.

![Alt text](/img/glossary/sigmoid_function1.jpg "Sigmoid Function 1")

로 정의된다. 최근에는 Vanishing Gradient Problem에 취약하다고 판단되어서 많이 사용되지 않는다. 구체적으로 인풋 값이 너무 커지거나 작아지면 해당 구간에서의 미분값(Gradient)가 0이 되는 문제가 있다. (그림에서 약 -6이하, 6이상인 구간)

![Alt text](/img/glossary/sigmoid_function2.jpg "Sigmoid Function 2")

Subsampling
---------------------------
여러 층의 컨볼루션 레이어(Convolution Layer)만으로도 신경망을 구성하는 것이 가능하지만, 보다 함축적이고 일반적인(General) 이미지의 형상 혹은 피처맵(feature map)을 얻기 위해서는 풀링 레이어(Pooling Layer)를 통해 subsampling을 해야 한다. 풀링 레이어는 입력된 피처맵을 낮은 차원의 피처맵으로 만드는 역할을 한다. 가령, 96X96 피처맵을 2X2 패치(patch)들로 쪼개면, 이는 48X48 피처맵이 되고, 각각의 2X2 패치는 최대/평균 풀링(max/average pooling) 등의 연산을 통해 subsampling된다.
   
Support Vector Machine(SVM)
---------------------------
비선형 문제를 신경망(Neural Network)으로 풀 수는 있지만, 학습에 오랜 시간이 걸린다는 단점 때문에, 짧은 시간에도 비교적 정확도가 높은 모형을 학습할 수 있는 서포트 벡터 머신(Support Vector Machine, SVM)을 종종 사용한다. 이는 분류 과업에 사용되는 지도학습 알고리즘으로, 커널이라는 방법을 통해 분리선(분리초평면, hyperplane)을 선형에서 비선형으로 변환할 수 있다.

Softmax Function
---------------------------
Classification 문제에서 Neural Networks의 마지막 Layer에서 주로 사용되는 Activation function 중 하나. 모두 더하면 1이 되는 normalized 된 함수이다. 어떤 Vector에 Softmax Function을 씌우면, 가장 큰 값(max value)는 여전히 가장 큰 값으로 남아있고, 다른 값들도 남아있기 때문에 softmax(“soft”+”max”)라고 불린다. 우리가 일반적으로 생각하는 가장 큰 값(max value)만 남기고 나머지 값들은 모두 0으로 취하는 max function은 hardmax(“hard”+”max”)라고 부른다. Softmax Function의 Output은 각각의 Label에 대해 예측한 확률값이 된다. 예를 들어, 어떤 사진이 [개, 고양이, 호랑이]인지를 분류하는 Classification 문제의 Softmax Function의 출력값이 [0.7, 0.2, 0.1]이라면 우리가 만든 분류기가 이 사진이 개일 확률을 70%, 고양이인 확률은 20%, 호랑이일 확률은 10%로 예측했다고 해석할 수 있다. 수식으로는 아래와 같이 표현된다. 

![Alt text](/img/glossary/softmax_function1.jpg "Softmax Function 1")

![Alt text](/img/glossary/softmax_function2.jpg "Softmax Function 2")

SSD
---------------------------
++Need to Fill++

Step size
---------------------------
학습속도(Learning rate)와 동일한 의미를 가지며, 속도보다 크기나 보폭의 관점에서 이야기할 때 step size라고 한다. 손실함수(loss function)에서 최솟값(global minimum)을 찾을 때, 보폭(step size)이 너무 작으면 학습에 너무 오랜 시간이 걸리거나 극솟값(local minimum)에 갇혀버리는 문제가 발생할 수 있고, 반대로 보폭이 너무 크면 최적값(optimal value)을 지나치는 경우가 있을 수 있다. 결국 적절한 step size를 선택하는 것은 최적화(Optimization)에 있어 매우 중요한 요인이다.

Stride
---------------------------
스트라이드(Stride)란 합성곱 레이어(Convolutional Layer) 혹은 풀링 레이어(Pooling Layer)에서 윈도우 슬라이딩(Window Sliding)의 보폭을 의미한다. 가령, 5X5 타일과 그 위를 움직이는 3X3의 윈도우가 있을 때, 스트라이드는 윈도우를 얼마만큼 오른쪽으로 이동시킬 것인가를 결정한다. 스트라이드가 1인 경우, 아래 그림과 같이 움직인다.

![Alt text](/img/glossary/stride.jpg "Stride")

---

T
=======

tanh Function
---------------------------
Hyperbolic Tangent(tanh) 함수는 시그모이드(Sigmoid)의 대체제로 사용될 수 있는 활성화 함수(Activation Function)이다. tanh는 그 형태가 Sigmoid와 매우 유사하다. 실제로, Hyperbolic Tangent 함수는 확장 된 시그모이드 함수이다. tanh와 Sigmoid의 차이점은 Sigmoid의 출력 범위가 0에서 1 사이인 반면 tanh와 출력 범위는 -1에서 1사이라는 점이다. tanh는 Sigmoid에 비해 출력 범위가 더 넓고 경사면(gradient)이 큰 범위가 더 넓기 때문에 더 빠르게 수렴하여 학습하는 특성이 있다. Sigmoid와 비교하여 중심점이 0이고 기울기가 큰 범위가 넓은 차이점이 있지만 Sigmoid의 치명적인 단점인 Vanishing gradient problem 문제를 그대로 갖고 있다.

![Alt text](/img/glossary/tanh_function.jpg "tanh Function")

Teacher Forcing
---------------------------
++Need to Fill++

Test Bed
---------------------------
테스트베드(Test Bed)는 과학 이론, 계산 도구, 신기술에 대해 엄격하고, 투명하고, 재현 가능한 테스트를 수행하기 위한 플랫폼이다. 이 용어는 실험적인 연구 및 신제품 개발 플랫폼과 환경을 기술하기 위한 수많은 원리들을 따른다.

Transfer Learning
---------------------------
충분한 양의 데이터셋(dataset)을 갖추는 것은 쉽지 않다. 때문에 합성곱 신경망(Convolutional Network)을 무작위 초기화(Random Initialization)를 통해 바닥부터 학습(training from scratch)시키는 사람은 거의 없다. 대신에 Image-Net(100개의 레이블에 대해 120만개의 이미지가 있다)과 같은 방대한 데이터셋에서 모델을 미리 학습(pre-train)시킨 다음, 이 모델을 초기화(Initialization) 또는 고정 특징 추출기(Fixed Feature Extractor)로써 사용한다. 이를 전이학습(Transfer Learning)이라고 한다. 다음은 전이학습의 2가지 주요 방식이다.
1. 합성곱 신경망의 미세조정(Fine-tuning): 무작위 초기화 대신, 신경망을 Image-Net 1000 데이터셋 등으로 미리 학습한(pre-trained) 신경망으로 초기화한다. 학습의 나머지 과정은 동일하다.
2. 특징 추출기로써의 합성곱 신경망: 전연결층(Fully connected layer)을 제외한 모든 신경망의 가중치(weight)를 고정하고, 전연결층만 가중치를 학습한다.

t-SNE(t-distributed Stochastic Neighbor Embedding)
---------------------------
t-SNE는 고차원의 vector space를 사람이 이해할 수 있는 2차원 혹은 3차원 공간으로 시각화하는 방법이다. 흔히 feature의 차원은 수백, 수천 차원을 넘어가는데 이러한 고차원의 공간을 사람은 떠올리는것 조차 어렵다. 이러한 고차원 공간에서 벡터들간의 관계(유사성 등)를 보존하면서 저차원 공간(2d, 3d)으로 차원을 축소한다면 고차원 공간에서의 벡터의 분포를 어림짐작이나마 할 수 있을 것이다. t-SNE가 동작하는 방식은 다음과 같다. 먼저 고차원상의 두 점을 하나의 pair로 묶고 유사한것들은 더 잘 뽑히게, 그렇지 않은것들은 덜 뽑히게끔 하나의 확률 분포를 만들고, 저차원 공간의 점들에 대해서도 같은 방식으로 확률 분포를 정의하여 두 확률분포 간의 Kullback-Leibler divergence를 최소화한다.

---

U
========

Underfitting
---------------------------
과적합(Overfitting)의 반대 현상을 과소적합(Underfitting)이라고 하는데, 모델의 단순도에 비해 학습데이터가 너무 많을 때 Underfitting이 일어난다. 학습 과정에서 머신 러닝 알고리즘이 Training Data도 제대로 학습하지(fitting) 못하는 상황. 보통 머신 러닝 모델의 표현력이 너무 약하거나 최적화(Optimization)가 잘 이루어지지 않아서 발생한다. 다른 말로 High Bias-Low Variance라고도 한다. 이를 해결하기 위해서는 더욱 강력한 표현력을 가진 모델을 사용하거나 더 발전된 형태의 Optimization Algorithm을 사용해야한다.

![Alt text](/img/glossary/underfitting.jpg "Underfitting")

Underfitting이 발생한 상황(맨 왼쪽 그림)

---

V
=======

Validation Set
---------------------------
검증세트(validation set)는 데이터 세트(data set) 중에서 트레이닝셋(training set) 및 테스트셋(test set)과 구분되며, 초매개변수(hyperparameter)를 조정하는 데 사용하는 데이터이다.

Vanilla SGD
---------------------------
Vanilla는 하얗고, pure, naive한 이미지를 가진다. 즉, 아무런 추가 기능이 없는 basic한 SGD를 의미한다.

Vanishing Gradient Problem
---------------------------
활성화함수(Activation Function) 중 tanh 함수와 sigmoid 함수는 양쪽 끝으로 갈수록 기울기(gradient)가 0으로 수렴하는 것을 볼 수 있다. 역전파(back propagation)를 통해 인공신경망을 튜닝(tuning)할 때, gradient에 대한 연쇄법칙(chain rule)이 적용되기 때문에 앞쪽 레이어로 갈수록 거의 사라져버린다. 결국 신경망은 매우 느린 속도로 학습하게 되고, 손실함수(loss function)에서 최솟값(global minimum)에 도달하지 못한 채 극솟값(local minimum)에 갇히는 문제가 발생한다. 결과적으로 앞쪽 레이어의 파라미터를 튜닝(tuning)하기 어렵게 만드는데, 이를 사라지는 기울기 문제(Vanishing Gradient Problem)라고 표현한다. 다음은 이 문제를 해결하기 위해 제시된 주요 방법이다.
1. 활성화 함수로 tanh나 sigmoid 대신 ReLU를 사용한다.
2. 가중치(weight)가 활성화 함수의 포화영역(Saturation region)에서 초기화되지 않게 조절하고, 낮은 학습률(learning rate)을 설정한다.
3. 배치 정규화(Batch Normalization)를 사용한다.

Variational Auto-Encoder(VAE)
---------------------------
VAE는 데이터가 생성되는 과정, 즉 데이터의 확률분포를 학습하기 위한 두 개의 신경망(encoder, decoder)으로 구성되어 있다. VAE는 잠재변수(latent variable) z를 가정하고 있는데, encoder는 입력 데이터(x)를 추상화하여 잠재적인 특징을 추출(잠재변수, z)하는 역할을 하고, decoder는 encoder가 만든 잠재변수(z)를 활용해 원 데이터(x)를 복원해내는 역할을 한다. 잘 학습된 VAE는 임의의 z값을 decoder에 넣으면 다양한 데이터를 생성할 수 있다. VAE 아키텍처는 다음 그림과 같다.

![Alt text](/img/glossary/variational_autoencoder.jpg "Variational Auto-Encoder(VAE)")

Visual Dialog
---------------------------
++Need to Fill++

Visual Storytelling
---------------------------
++Need to Fill++

Voting
---------------------------
투표(Voting)은 앙상블 러닝(Ensemble Learning)에서 최종 결론을 도출할 때 사용되는 방법 중 하나로, 주로 분류를 위해 사용된다. 이중 다수결 투표(Majority Voting)는 말 그대로 다수결을 채택하며, 전체 모델 중 과반수가 예측한 결과를 최종 결론으로 도출한다. 이 경우 어떠한 결론도 과반수의 투표를 획득하지 못한다면, 안정적인 결론을 도출하기 어렵다는 단점이 있다. 또 다른 방법으로는 Weighted Voting이 있는데 이는 특정 모델들에 가중치를 주어 최종 결론을 도출한다.

---

W
=======

Weakly Supervised Localization
-------------------------------
일반적인 Supervised Learning에서 데이터셋은 어디에 물체가 있는지에 대한 정보를 바운딩 박스(Bounding Box)를 통해 모든 이미지에 주는데, 일일이 작업해야하기 때문에 데이터셋을 만들기가 어렵다. 반면, Weakly supervised localization에서 데이터셋은 이미지와 라벨만 존재하고 네트워크가 알아서 해당 물체가 이미지의 어느 부분에 있는지를 detect한다. 
1. 이는 의료 영상에서 중요한데, 예를 들어, 의료 영상에서 단순히 환자가 폐암인지, 결핵인지만을 알려주는 것이 아니라, X-ray 사진에서 이 부분 때문에 문제가 있다고 알려줘야 정확한 확인이 가능하기 때문이다.
2. 또한 CNN을 debugging하는 입장에서, CNN이 왜 이런 결정을 내렸는지 알아볼 필요가 있을 때, 이미지의 어느 부분을 집중하고 보고 있는지 확인하고 싶을 때 사용할 수 있다.

Weight Decay
---------------------------
가중치 감쇠(Weight decay)는 가중치(weight)에 계수를 곱해서 그 값이 크게 발산하는 것을 방지해 최적화가 안정적으로 진행되게 하는 방법이다. 과적합(Overfitting)은 가중치 값이 커서 발생하는 경우가 많기 때문에, 가중치가 클수록 큰 페널티를 부과하여 과적합을 억제하는 방법이다. 즉, weight의 감쇠(decay)를 통해 모델의 복잡도(Complexity)를 의도적으로 감소시킴으로써 과적합(Overfitting)을 방지하는 일반화(Regularization) 기법이다.

Whitening
---------------------------
Covariate Shift를 줄이는 naive한 방법으로, 각 layer로 들어가는 입력을 평균 0(zero mean), 분산 1(unit variance)을 가지는 정규분포(normal distribution)로 정규화(normalize)하는 방법이다. 하지만 Whitening은 아래의 두 가지 문제점을 보이며, 이를 해결하기 위한 방법으로 Batch Normalization을 제시한다.
1. 다변량 정규분포로 정규화 하려면 역(inverse)의 제곱근을 계산해야하기 때문에 필요한 계산량이 많아진다.
2. 평균과 분산 또한 전체 데이터를 기준으로 training마다 계산해야하기 때문에 계산량이 많아진다.

Word2Vec
---------------------------
++Need to Fill++

---

X
=======

---

Y
=======

YOLO
---------------------------
++Need to Fill++

---

Z
=======

---