Como Desenvolvedor de Software, preciso criar uma aplicação para resolver as seguintes questões:

## Como Adjunto do Oficial de dia, preciso controlar a entrada e saída de viaturas militares do CITEx.

## Devem ser lançados no sistema, os Odômetros de entrada e saída das viaturas.

## O Lançamento é realizado pelo militar da permanência, este militar deve ter informações de nome, posto, graduação e organização militar

## Sempre que uma viatura sair das dependências do quartel, deve ser lançado o MK de Saída e o nome do motorista responsável, e sempre que retornar, deve ser lançado o KM de entrada.

## Para todos os lançamentos, devem ser registrados a data e hora da operação e o nome do militar da pamanência que efetuou a operação.

neste momento, preciso que me ajude a abstrair as entidades e relacionamentos para criação do banco de dados da aplicação, de acordo com o cenário acima.

Ativar a escuta para os commits husky
husky:prepare

### S - Single Responsibility Principle (Princípio da responsabilidade única)

- Uma classe ou objeto deve ter apenas uma responsabilidade. Isso significa que ele deve ser responsável por apenas um aspecto do comportamento do sistema.

- Por exemplo, uma classe User não deve ser responsável por autenticar usuários, gerar relatórios e armazenar dados de usuário. Em vez disso, essas responsabilidades devem ser delegadas a classes ou objetos separados.

### L - Liskov Substitution Principle (Princípio da substituição de Liskov)

- Classes derivadas devem ser substituíveis por suas classes base. Isso significa que qualquer lugar onde uma classe base possa ser usada, sua classe derivada também deve ser capaz de ser usada.

- Por exemplo, uma classe Animal pode ter uma subclasse Dog. Uma função que aceita um objeto Animal deve ser capaz de aceitar um objeto Dog sem causar erros.

### D - Dependency Inversion Principle (Princípio da inversão de dependências)

- Dependências devem ser invertidas. Isso significa que classes ou objetos devem depender de abstrações, e não de implementações concretas.

- Por exemplo, uma classe Circle deve depender de uma interface Shape. Isso permite que a classe Circle seja usada com qualquer implementação da interface Shape, seja ela Circle, Rectangle ou qualquer outra.
