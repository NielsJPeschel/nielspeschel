import {PageLayout, InnerStyle} from '../components/pageLayout';

import { ExpCard } from '../components/expCard'

import Github from '../public/social/github.svg';
import PDesigns from '../public/social/pdlogo.svg';

const work = [{
    href: 'https://github.uconn.edu/njp15106/DataModelingGeneExpressions',
    icon: <Github fill = 'white' />,
    title: 'Data Modeling Gene Expressions',
    techs: [ 'python', 'php', 'nltk', 'flask', 'MySQL'],
    descr: 'This project explores the application of natural language processing in gene expression research.'
},
{
    href: 'https://pescheldesigns.com',
    icon: <PDesigns fill = 'white' />,
    title: 'Peschel Designs',
    techs: [ 'Photoshop', 'Illustrator', 'Wordpress'],
    descr: 'Peschel Designs is my graphic design portfolio, specializing in crafting logos and brands.'
}]


const Work = () => {
    return (
        <PageLayout>
            <InnerStyle>
                <h1>My Work</h1>

                <div>
                    { work.map( (temp, i) => (
                        <ExpCard
                            key = {i} 
                            href = {temp.href}
                            icon = {temp.icon}
                            title = {temp.title}
                            techs = {temp.techs}
                            descr = {temp.descr}
                        />
                    ))}
                    
                </div>
            </InnerStyle>
            
        </PageLayout>
    )
}

export default Work;