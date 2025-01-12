
# Algorithms and Models Terminology for Search Engines

## Text Processing
- **TF-IDF (Term Frequency-Inverse Document Frequency)**: A statistical measure that evaluates the importance of a word in a document relative to a collection of documents.
- **Cosine Similarity**: A metric used to measure the cosine of the angle between two non-zero vectors, often representing document similarity.
- **Jaccard Similarity**: Measures the overlap between two sets, used to calculate similarity between documents or terms.
- **Bag of Words (BoW)**: A representation of text data where the frequency of words is used without considering grammar or order.
- **Word Embeddings**: Dense vector representations of words in a continuous space, capturing semantic relationships.

## Graph-Based Algorithms
- **PageRank**: An algorithm that ranks web pages by analyzing the link structure of the web, assigning higher scores to pages with more or higher-quality links.
- **HITS (Hyperlink-Induced Topic Search)**: A graph-based algorithm that identifies hubs (pages pointing to many authorities) and authorities (pages pointed to by many hubs).
- **Graph Traversal**:
  - **Depth-First Search (DFS)**: Explores as far as possible along a branch before backtracking.
  - **Breadth-First Search (BFS)**: Explores all nodes at the current level before moving deeper.
- **Shortest Path Algorithms**:
  - **Dijkstra's Algorithm**: Finds the shortest path from a single source to all nodes in a graph.
  - **A* Algorithm**: An optimization of Dijkstra's algorithm using heuristics for faster pathfinding.
- **Connected Components**: Identifies groups of connected nodes in a graph.

## Clustering Models
- **K-Means Clustering**: Partitions data into K clusters by minimizing the variance within each cluster.
- **Hierarchical Clustering**: Creates a tree-like structure of clusters, useful for visualizing relationships.
- **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**: Groups points based on density, identifying clusters of arbitrary shape and handling outliers.

## Ranking Models
- **BM25**: A probabilistic model used for ranking documents based on term frequency and document length.
- **Learning to Rank**: Machine learning models that combine multiple features to rank documents or items.

## Dimensionality Reduction
- **Singular Value Decomposition (SVD)**: Decomposes a matrix into components to reduce dimensionality, commonly used in Latent Semantic Analysis.
- **Principal Component Analysis (PCA)**: Reduces dimensionality by finding the principal components that capture the most variance in data.

## Probabilistic Models
- **Naive Bayes Classifier**: A probabilistic algorithm based on Bayes' theorem, used for text classification.
- **Latent Dirichlet Allocation (LDA)**: A generative probabilistic model for topic modeling in text data.
- **Hidden Markov Models (HMM)**: Models sequences of observations and hidden states, often used in language modeling.

## Optimization Techniques
- **Gradient Descent**: An iterative algorithm to minimize a loss function by updating model parameters in the direction of steepest descent.
- **Regularization**: A method to prevent overfitting by penalizing complex models.

## Information Retrieval Models
- **Vector Space Model**: Represents documents and queries as vectors in a multidimensional space, enabling similarity computation.
- **Boolean Retrieval Model**: Uses Boolean operators (AND, OR, NOT) to match documents to queries.

## Neural Network Models for Search
- **Transformer Models**: Deep learning models that process sequential data, such as text, using self-attention mechanisms.
- **BERT (Bidirectional Encoder Representations from Transformers)**: A transformer-based model that understands context by processing text bidirectionally.
- **Embedding-Based Retrieval**: Uses dense vector representations to retrieve semantically similar documents.

This terminology encompasses key mathematical and algorithmic foundations essential for search engine technology.
