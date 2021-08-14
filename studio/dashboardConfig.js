export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611753136d37664db31493a0',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-6iy7ao31',
                  apiId: '47f546af-eba0-416e-8c00-3280e2fadccb'
                },
                {
                  buildHookId: '611753138af9b54eac84a7bd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q2p7v2gg',
                  apiId: '9c9639de-1f19-4a49-af64-2e0d1760116d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TeimlyPublishing/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q2p7v2gg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
