# 디자인 시스템과 UI라이브러리

-	패키지 구조: 모노레포 (Package-Based Project)
- 관리 툴: [Nx](https://nx.dev/getting-started/why-nx) 

## 모노레포 구성


### 1. Packages

```
packages  
 ┣ esbuild-config
 ┣ react  
 ┃ ┗ components 
 ┗ themes  
```

`packages` 디렉토리는 `service`에 사용되는 다양한 라이브러리들을 관리합니다.

#### 1.1. esbuild-config

- `@ooz/esbuild-config` 패키지는 모듈 번들러인 esbuild를 사용하여 여러 패키지에서 **재사용 가능한 esbuild 설정**을 제공합니다.
- 빌드 스크립트를 통해 mjs, cjs, type.d.ts 파일로 출력됩니다.


#### 1.2. themes

- `@ooz/themes`패키지는 일관된 **디자인 시스템**을 유지하기 위해 컬러, 타이포그라피 등의 디자인 토큰을 제공합니다.
- Chakra UI 토큰 기반(학습 목적) [Chakra-UI-Figma-Kit](https://www.figma.com/design/KI44Wj0rj2slcZ4xD3E70X/Chakra-UI-Figma-Kit-(Community)?node-id=0-1&t=m0cEXuRnAz13eRQK-1) 


#### 1.3. react-components-*
- `@ooz/react-components-*` 패키지는 `@ooz/themes` 기반 CSS 변수들을 활용하여 재사용 가능한 리액트 **컴포넌트 단위의 UI 라이브러리**를 제공합니다. (button, card 등)
