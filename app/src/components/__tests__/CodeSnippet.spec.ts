import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import CodeSnippetVue from '../CodeSnippet.vue'

/*
test('layout default slot', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: 'Main Content'
    }
  })

  expect(wrapper.html()).toContain('Main Content')
})
*/
describe('CodeSnippet', () => {
  it('It shows the code', () => {
    const wrapper = mount(
      CodeSnippetVue, 
      { 
       props: { showCode: true },
       slots: { default: 'this is some code text stuff' }
      }
    );
    expect(wrapper.text()).toContain('this is some code text stuff');
  }),
  it('It shows the code and title', () => {
    const wrapper = mount(
      CodeSnippetVue, 
      { 
       props: { showCode: true, title: "the title" },
       slots: { default: 'this is some code text stuff' }
      }
    );
    expect(wrapper.text()).toContain('this is some code text stuff');
    expect(wrapper.text()).toContain('the title');
  }),
  it('It hides the code', () => {
    const wrapper = mount(
      CodeSnippetVue, 
      { 
       props: { showCode: false },
       slots: { default: 'this is some code text stuff' }
      }
    );
    expect(wrapper.text()).not.toContain('this is some code text stuff');
  }),
  it('It hides the code and shows the title', () => {
    const wrapper = mount(
      CodeSnippetVue, 
      { 
       props: { showCode: false, title: "the title card" },
       slots: { default: 'this is some code text stuff' }
      }
    );
    expect(wrapper.text()).not.toContain('this is some code text stuff');
    expect(wrapper.text()).toContain('the title card');
  })
})
