import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '命令行工具',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          主要为了解决难于编写跨平台脚本，脚本编写某些功能比较困难（比如处理时间、处理 JSON）。
      </>
    ),
  },
    {
        title: '脚本组装',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                可组装日常脚本小工具，将工作流自动化。
            </>
        ),
    },
  {
    title: '运维',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          运维小工具（命令）管理。方便小工具的统一安装、升级、卸载。
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
