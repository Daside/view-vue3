import { reactive, h } from 'vue'
import { renderIcon } from '@/utils'
import { RouterLink } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { MenuOption, MenuGroupOption } from 'naive-ui'
import { icon } from '@/plugins'

const { GridIcon, BeerIcon, DesktopIcon, LaptopOutlineIcon } = icon.ionicons5
export const renderMenuLabel = (option: MenuOption | MenuGroupOption) => {
  return option.label
}

export const expandedKeys = () => ['all-project']

export const menuOptionsInit = () => {
  
  const t = window['$t']

  return reactive([
    {
      key: 'divider-1',
      type: 'divider'
    },
    {
      label: t('project.project'),
      key: 'all-project',
      icon: renderIcon(GridIcon),
      children: [
        {
          type: 'group',
          label: t('project.my'),
          key: 'my-project',
          children: [
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: PageEnum.BASE_HOME_ITEMS_NAME
                    }
                  },
                  { default: () => t('project.all_project') }
                ),
              key: PageEnum.BASE_HOME_ITEMS_NAME,
              icon: renderIcon(DesktopIcon)
            },
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: PageEnum.BASE_HOME_TEMPLATE_NAME
                    }
                  },
                  { default: () => t('project.my_templete') }
                ),
              key: PageEnum.BASE_HOME_TEMPLATE_NAME,
              icon: renderIcon(LaptopOutlineIcon)
            }
          ]
        }
      ]
    },

    {
      key: 'divider-2',
      type: 'divider'
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME
            }
          },
          { default: () => t('project.template_market') }
        ),
      key: PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
      icon: renderIcon(BeerIcon)
    }
  ])
}